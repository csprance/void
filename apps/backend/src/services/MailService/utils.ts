import { createTransport } from "nodemailer";
import { parse } from "yaml";

export function getMailer() {
  return createTransport({
    host: "localhost",
    port: 587,
    secure: false, // true for 465, false for other ports
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export function parseFirstCommentYAML(template: string): any {
  // Regular expression to extract the first {% comment %} block
  const commentRegex = /{% comment %}([\s\S]*?){% endcomment %}/;
  const match = template.match(commentRegex);

  if (match && match[1]) {
    try {
      // Parse the YAML content within the comment
      return parse(match[1]);
    } catch (error) {
      console.error("Error parsing YAML:", error);
      return null;
    }
  }

  return null;
}
