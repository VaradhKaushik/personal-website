import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FadeInSection from "./FadeInSection";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      // This is configured for static hosting
      // For GitHub Pages, we'll use a client-side approach
      console.log("Form submission data:", data);
      
      // Create a mailto link with the form data
      const subject = encodeURIComponent(data.subject);
      const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
      `);
      
      // Open the user's email client with pre-filled data
      window.open(`mailto:john.doe@example.com?subject=${subject}&body=${body}`);
      
      // Show success message
      toast({
        title: "Email client opened!",
        description: "Your message has been prepared. Please send the email from your email client.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem preparing your message. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
          <p className="text-gray-300 mt-4 text-center max-w-2xl">
            Feel free to contact me for any work inquiries, collaboration opportunities, or just to say hello.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Contact Information */}
            <FadeInSection className="md:col-span-2">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md h-full">
                <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">Contact Information</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-gray-700 p-3 rounded-full text-primary mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">Email</h4>
                      <a href="mailto:john.doe@example.com" className="text-primary hover:text-secondary transition-colors duration-300">
                        john.doe@example.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-gray-700 p-3 rounded-full text-primary mr-4">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">Phone</h4>
                      <a href="tel:+1234567890" className="text-primary hover:text-secondary transition-colors duration-300">
                        (123) 456-7890
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-gray-700 p-3 rounded-full text-primary mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">Location</h4>
                      <p className="text-gray-400">San Francisco, California</p>
                    </div>
                  </li>
                  
                  <li>
                    <h4 className="text-gray-300 font-medium mb-3">Social Profiles</h4>
                    <div className="flex space-x-4">
                      <motion.a 
                        href="https://linkedin.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-primary hover:bg-primary hover:text-white transition-colors duration-300 p-3 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </motion.a>
                      <motion.a 
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-primary hover:bg-primary hover:text-white transition-colors duration-300 p-3 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-github"></i>
                      </motion.a>
                      <motion.a 
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-primary hover:bg-primary hover:text-white transition-colors duration-300 p-3 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-twitter"></i>
                      </motion.a>
                      <motion.a 
                        href="https://medium.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-primary hover:bg-primary hover:text-white transition-colors duration-300 p-3 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <i className="fab fa-medium"></i>
                      </motion.a>
                    </div>
                  </li>
                </ul>
              </div>
            </FadeInSection>
            
            {/* Contact Form */}
            <FadeInSection className="md:col-span-3">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">Send Me a Message</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Inquiry" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message here..." {...field} rows={4} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-secondary text-white w-full sm:w-auto"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
