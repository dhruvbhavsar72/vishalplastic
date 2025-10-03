import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailConfig, type EmailTemplateParams } from '../config/emailConfig';
import { toast, Toaster } from 'react-hot-toast';

interface FormData {
    firstName: string
    lastName: string
    mobile: string
    description: string
}

const ContactForm = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        mobile: '',
        description: ''
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validateForm = (): boolean => {
        if (!formData.firstName.trim()) {
            toast.error('First name is required')
            return false
        }
        if (!formData.lastName.trim()) {
            toast.error('Last name is required')
            return false
        }
        if (!formData.mobile.trim()) {
            toast.error('Mobile number is required')
            return false
        }
        if (!formData.description.trim()) {
            toast.error('Description is required')
            return false
        }
        return true
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setIsLoading(true)

        try {
            const templateParams: EmailTemplateParams = {
                from_name: `${formData.firstName} ${formData.lastName}`,
                first_name: formData.firstName,
                last_name: formData.lastName,
                from_email: emailConfig.companyEmail,
                mobile: formData.mobile,
                message: formData.description,
                to_name: emailConfig.companyName
            }

            await emailjs.send(
                emailConfig.serviceId,
                emailConfig.templateId,
                templateParams as Record<string, unknown>,
                emailConfig.publicKey
            )

            toast.success('Message sent successfully! We will get back to you soon.')
            setFormData({
                firstName: '',
                lastName: '',
                mobile: '',
                description: ''
            })
        } catch (error) {
            console.error('Error sending email:', error)
            toast.error('Failed to send message. Please try again later.');
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="col-lg-4 col-md-6 footer-right-form footer-details-title">
            <Toaster position="top-right" />
            <h5>Contact Us</h5>
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>First Name *</label>
                    <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </div>
                <div className="form-field">
                    <label>Last Name *</label>
                    <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </div>
                <div className="form-field">
                    <label>Mobile No *</label>
                    <input
                        type="tel"
                        name="mobile"
                        className="form-control"
                        placeholder="Mobile no"
                        value={formData.mobile}
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </div>
                <div className="form-field">
                    <label>Description *</label>
                    <textarea
                        name="description"
                        placeholder='Enter Your text'
                        rows={5}
                        className='w-full form-control'
                        value={formData.description}
                        onChange={handleChange}
                        disabled={isLoading}
                    />
                </div>

                <input
                    type="submit"
                    value={isLoading ? 'Sending...' : 'Submit Now'}
                    className="btn submit-btn"
                    disabled={isLoading}    
                />
            </form>
        </div>
    )
}

export default ContactForm
