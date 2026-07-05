import { Router } from "express";
import rateLimit from "express-rate-limit";
import { isDatabaseConnected } from "../config/database.js";
import ContactMessage from "../models/ContactMessage.js";
import { sendContactNotification } from "../services/mailService.js";

const router = Router();

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many contact attempts. Please try again later."
  }
});

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function validateContactPayload(payload) {
  const data = {
    name: clean(payload.name),
    email: clean(payload.email).toLowerCase(),
    subject: clean(payload.subject),
    message: clean(payload.message)
  };

  const errors = [];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (data.name.length < 2 || data.name.length > 80) {
    errors.push("Name must be between 2 and 80 characters.");
  }

  if (!emailPattern.test(data.email) || data.email.length > 120) {
    errors.push("Enter a valid email address.");
  }

  if (data.subject.length < 3 || data.subject.length > 120) {
    errors.push("Subject must be between 3 and 120 characters.");
  }

  if (data.message.length < 10 || data.message.length > 2000) {
    errors.push("Message must be between 10 and 2000 characters.");
  }

  return { data, errors };
}

router.post("/", contactLimiter, async (request, response, next) => {
  try {
    const { data, errors } = validateContactPayload(request.body || {});

    if (errors.length > 0) {
      return response.status(400).json({
        message: "Please fix the highlighted fields.",
        errors
      });
    }

    if (!isDatabaseConnected()) {
      return response.status(503).json({
        message: "Contact storage is not configured. Please email Shaurya directly."
      });
    }

    const savedMessage = await ContactMessage.create(data);
    await sendContactNotification(data);

    return response.status(201).json({
      message: "Message received.",
      id: savedMessage._id
    });
  } catch (error) {
    return next(error);
  }
});

export default router;
