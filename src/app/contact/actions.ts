"use server";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmissionResult {
  success: boolean;
  message?: string;
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<SubmissionResult> {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return {
        success: false,
        message: "All fields are required.",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      };
    }

    // Validate message length
    if (formData.message.length > 500) {
      return {
        success: false,
        message: "Message must be 500 characters or less.",
      };
    }

    // Get webhook URL from environment variable (server-side only)
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    
    if (!webhookUrl) {
      console.error("NEXT_PUBLIC_N8N_WEBHOOK_URL is not configured");
      return {
        success: false,
        message: "Server configuration error. Please try again later.",
      };
    }

    // Create payload with ISO-8601 timestamp
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Send POST request to n8n webhook
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Check if request was successful
    if (!response.ok) {
      console.error(`n8n webhook error: ${response.status} ${response.statusText}`);
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }

    return {
      success: true,
      message: "Message sent! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
