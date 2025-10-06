// EmailJS Configuration
// Replace these values with your actual EmailJS credentials
// For better security, consider using environment variables

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cd9zinf',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_1h9hdgs',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'VhhoLAbN3ZgZkDBQ_',
  // Company information
  companyName: 'vishpa',
  companyEmail: 'dhruv_bhavsar18@yahoo.com'
}

// Template parameters interface
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string
  first_name: string
  from_email: string
  mobile: string
  message: string
  to_name: string
  to_email?: string
}
