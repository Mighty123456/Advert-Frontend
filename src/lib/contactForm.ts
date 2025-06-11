// Contact form submission utility

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  service?: string;
  budget?: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve) => {
    try {
      // Google Apps Script web app URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbylgEzdm8FtXG6Dwr4UvA4XwDfuHAoPx0iLQTYNgKyj80Pr0axq3Vth81ioxiaj0GvP/exec';
      
      // Create a hidden iframe to submit the form
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'submit-frame';
      document.body.appendChild(iframe);
      
      // Listen for iframe load events to detect success/error
      let hasResponded = false;
      
      const handleIframeLoad = () => {
        if (hasResponded) return;
        hasResponded = true;
        
        try {
          // Try to access iframe content to check for success/error
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            const bodyText = iframeDoc.body?.textContent || '';
            if (bodyText.includes('Form Submitted Successfully') || bodyText.includes('Thank you')) {
              resolve({
                success: true,
                message: 'Form submitted successfully! We\'ll get back to you soon!'
              });
            } else {
              resolve({
                success: false,
                message: 'There was an issue submitting the form. Please try again.'
              });
            }
          } else {
            // If we can't access iframe content, assume success (data is being stored)
            resolve({
              success: true,
              message: 'Form submitted successfully! We\'ll get back to you soon!'
            });
          }
        } catch (error) {
          // Cross-origin restrictions might prevent accessing iframe content
          // Since data is being stored, assume success
          resolve({
            success: true,
            message: 'Form submitted successfully! We\'ll get back to you soon!'
          });
        }
        
        // Clean up
        setTimeout(() => {
          if (document.body.contains(form)) {
            document.body.removeChild(form);
          }
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
        }, 1000);
      };
      
      const handleIframeError = () => {
        if (hasResponded) return;
        hasResponded = true;
        
        resolve({
          success: false,
          message: 'Network error. Please check your connection and try again.'
        });
        
        // Clean up
        setTimeout(() => {
          if (document.body.contains(form)) {
            document.body.removeChild(form);
          }
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
        }, 1000);
      };
      
      // Add event listeners
      iframe.onload = handleIframeLoad;
      iframe.onerror = handleIframeError;
      
      // Create a temporary form element and submit it
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_SCRIPT_URL;
      form.target = 'submit-frame';
      form.style.display = 'none';
      
      // Add form data as hidden inputs
      const fields = [
        { name: 'name', value: formData.name },
        { name: 'email', value: formData.email },
        { name: 'phone', value: formData.phone || '' },
        { name: 'subject', value: formData.subject },
        { name: 'message', value: formData.message },
        { name: 'service', value: formData.service || '' },
        { name: 'budget', value: formData.budget || '' }
      ];
      
      fields.forEach(field => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
      });
      
      // Add form to DOM and submit
      document.body.appendChild(form);
      form.submit();
      
      // Fallback timeout in case iframe events don't fire
      setTimeout(() => {
        if (!hasResponded) {
          hasResponded = true;
          resolve({
            success: true,
            message: 'Form submitted successfully! We\'ll get back to you soon!'
          });
          
          // Clean up
          if (document.body.contains(form)) {
            document.body.removeChild(form);
          }
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
        }
      }, 5000);
      
    } catch (error) {
      console.error('Error in form submission process:', error);
      resolve({
        success: false,
        message: 'An unexpected error occurred. Please try again later.'
      });
    }
  });
}; 