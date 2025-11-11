"use client"

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Calendar, Heart, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="plain"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          brandName="Beautix Laser"
          button={{
            text: "Book Consultation",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Transform Your Beauty Naturally"
          description="Experience the latest in laser aesthetic treatments with our state-of-the-art technology and expert care in a serene, luxurious environment"
          tag="Premium Beauty Studio"
          tagIcon={Sparkles}
          imageSrc="https://pixabay.com/get/gfeedfaccbd101ccd25466948dc141f8856b6acc2a9e2d0f497c402049907032565543e840524033da7fa5a8c5781f1421274d8acb4ca4a73f54a35686dea8575_1280.jpg"
          imageAlt="Modern laser aesthetic treatment room"
          frameStyle="card"
          buttons={[
            { text: "Book Consultation", href: "contact" },
            { text: "View Services", href: "services" }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Expert Care"
          description={[
            "At Beautix Laser, we combine advanced laser technology with personalized care to help you achieve your aesthetic goals safely and effectively.",
            "Our certified professionals are dedicated to providing exceptional results in a comfortable, spa-like environment designed for your relaxation and confidence."
          ]}
          showBorder={true}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>
      
      <div id="services" data-section="services">
        <FeatureCardOne
          title="Our Services"
          description="Discover our comprehensive range of advanced laser aesthetic treatments"
          tag="Treatments"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              title: "Laser Facial Rejuvenation",
              description: "Advanced laser treatments to reduce wrinkles, improve skin texture, and restore youthful radiance",
              imageSrc: "https://pixabay.com/get/gebbe69a5d99725249e8c85e6685cf17cc416e4c3ff6282712af97d2da5326507e5a3b79756b5168336b39077684ebb909c3109062de48d40337ce64c289ecb34_1280.jpg",
              imageAlt: "Laser facial treatment"
            },
            {
              title: "Skin Resurfacing",
              description: "Professional laser resurfacing to address acne scars, sun damage, and uneven skin tone",
              imageSrc: "https://pixabay.com/get/g15690192a6e2ab13edee3967406bcabe1ba851f994f4f41a833d0c91755cdd62205f92e4b0495dd05f7402e655684dd159fe3fa3a56718be3ed90f359154c11d_1280.jpg",
              imageAlt: "Skin rejuvenation treatment"
            },
            {
              title: "Laser Hair Removal",
              description: "Permanent hair reduction using cutting-edge laser technology for smooth, hair-free skin",
              imageSrc: "https://pixabay.com/get/gdb6a210abed4076f61dc569ae4af5c77ed16b122af380cd39881f6baadbef9bea1ef21d76ad92cb842472381f79d59c2ac07a96f5c4a3d09e66a0a1174fa4fb9_1280.jpg",
              imageAlt: "Laser hair removal treatment"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Client Love"
          description="Hear from our satisfied clients about their transformative experiences"
          tag="Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarah_beauty",
              testimonial: "The laser facial at Beautix was amazing! My skin has never looked better. The staff was so professional and caring.",
              imageSrc: "https://pixabay.com/get/gba165532d5a56c82609cb157142738f35fecada9158927131e56ea8793f56a68a7e80e8d10b63172badc472b33539ae825564d20f5fcc794d489e5e61e4e793e_1280.jpg",
              imageAlt: "Sarah testimonial"
            },
            {
              id: "2",
              name: "Emily",
              handle: "@emily_glows",
              testimonial: "I'm so happy with my laser hair removal results. The process was comfortable and the results are exactly what I wanted.",
              imageSrc: "https://pixabay.com/get/g15c90d1605b4c1336d6fe8d1fd083c858966d94e3321317c328fc4ceadf86db1a95163d3f3b7cd9180da874196a1e7a1de895118cd02975a556b92eacdf4a3a5_1280.jpg",
              imageAlt: "Emily testimonial"
            },
            {
              id: "3",
              name: "Jennifer",
              handle: "@jen_radiant",
              testimonial: "The skin resurfacing treatment exceeded my expectations. My acne scars have dramatically improved!",
              imageSrc: "https://pixabay.com/get/g26b10b028d004984d47e54fc49292596c5309a8d02f999179ffa47d6057c57afb186a9c885644966faa7192a01a5eb4a07797771be3b4936acc194c4df1fc128_1280.jpg",
              imageAlt: "Jennifer testimonial"
            },
            {
              id: "4",
              name: "Maria",
              handle: "@maria_renewed",
              testimonial: "Beautix Laser is the best! The atmosphere is so relaxing and the results speak for themselves. Highly recommend!",
              imageSrc: "https://pixabay.com/get/gf665d868f542cec2e629c916a5aa789ce90e1df6648f70e27d8ae2337f9d50b275b11c75b6cd3fb5117b5f1847c5712d917a6ed91297a3b27df6036d3f998eb7_1280.jpg",
              imageAlt: "Maria testimonial"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Common Questions About Our Laser Treatments"
          sideDescription="Everything you need to know about our services"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Is laser treatment safe?",
              content: "Yes, our laser treatments are FDA-approved and performed by certified professionals. We use the latest technology with proven safety records."
            },
            {
              id: "2",
              title: "How many sessions will I need?",
              content: "The number of sessions varies depending on the treatment and individual needs. During your consultation, we'll create a personalized treatment plan."
            },
            {
              id: "3",
              title: "What should I expect during recovery?",
              content: "Recovery time varies by treatment. Most clients experience minimal downtime with some redness or sensitivity that subsides within a few days."
            },
            {
              id: "4",
              title: "How long do results last?",
              content: "Results can be long-lasting, especially with proper skincare maintenance. We'll provide aftercare instructions to help you maintain your results."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Book Now"
          title="Ready to Transform Your Skin?"
          description="Schedule your complimentary consultation today and discover how our advanced laser treatments can help you achieve your aesthetic goals."
          tagIcon={Calendar}
          imageSrc="https://pixabay.com/get/g2a6cad184314e6192b14b618e7646dea6ceaa538b5c26b466e25332d88e4cd35f21b0effcfa0775238415ae940e0dad86f4a72701786147c04556002c91e847a_1280.jpg"
          imageAlt="Modern beauty clinic interior"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Book Consultation"
          termsText="By booking a consultation, you agree to our Terms of Service and Privacy Policy."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Beautix Laser"
          columns={[
            {
              items: [
                { label: "Services", href: "services" },
                { label: "About Us", href: "about" },
                { label: "Book Consultation", href: "contact" }
              ]
            },
            {
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Reviews", href: "testimonials" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}