import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.component.html',
  styleUrls: ['./service-description.component.css']
})
export class ServiceDescriptionComponent {
  services = {
    uiux: {
      service_name: "UI/UX",
      description: `      
<p class="pt-5">At KERNELIOUS, we specialize in custom web development services that are tailored to meet the unique needs and goals of our clients. Our team of experienced developers use the latest web technologies and best practices to create websites that are both visually stunning and highly functional.</p>
<p class="pt-5">Our web development services include:</p>
 <p class="pt-2">• Custom Website Development: We create custom websites that are tailored to your brand and your specific needs. Our developers work closely with you to understand your goals and create a website that meets your exact specifications.</p>
 <p class="pt-2">• E-Commerce Development: We specialize in e-commerce development, creating online stores that are easy to use and optimized for sales. We use the latest e-commerce platforms and tools to create a seamless shopping experience for your customers.</p>
 <p class="pt-2">• Content Management Systems (CMS) Development: We develop content management systems that are easy to use and customizable. Our developers work with popular CMS platforms such as WordPress and Drupal to create a system that fits your specific needs.</p>
 <p class="pt-2">• Web Application Development: We develop web applications that are both powerful and user-friendly. Whether you need a custom web application for your business or a mobile app that integrates with your website, we can help.</p>
<p class="pt-5">Our developers are experienced in a wide range of web technologies, including HTML, CSS, JavaScript, PHP, and more. We are committed to staying up-to-date with the latest trends and best practices in web development to ensure that your website is optimized for performance, security, and user experience.
If you're looking for custom web development services, KERNELIOUS can help. Contact us today to schedule a consultation and learn more about how we can help bring your web development project to life.
      </p>
      `,
      image: "assets/img/service/service-icon-10.1.png"
    },
    e_commerce: {
      service_name: "E-commerce",
      description: `
<p class="pt-5">At KERNELIOUS, we understand the importance of a seamless and user-friendly e-commerce experience. That's why we offer comprehensive e-commerce development services that are tailored to meet the needs and goals of your business.</p>
<p class="pt-5">Our e-commerce development services include:</p>
<p class="pt-5"> • Custom E-Commerce Website Design and Development: We create custom e-commerce websites that are optimized for sales and user experience. Our team of designers and developers work together to create a visually stunning and engaging online store that reflects your brand.</p>
<p class="pt-5"> • E-Commerce Platform Integration: We integrate popular e-commerce platforms such as Shopify, WooCommerce, Magento, and more into your website to create a seamless and efficient shopping experience for your customers.</p>
<p class="pt-5"> • Payment Gateway Integration: We integrate secure and reliable payment gateways into your website to ensure that your customers can easily make purchases with confidence.</p>
<p class="pt-5"> • Inventory Management: We provide inventory management solutions to ensure that your online store is always up-to-date with the latest products and availability.</p>
<p class="pt-5"> • Mobile Optimization: We optimize your e-commerce website for mobile devices to ensure that your customers can easily shop from anywhere, at any time.</p>
<p class="pt-5">Our team of experts are experienced in a wide range of e-commerce platforms and tools, and are committed to staying up-to-date with the latest trends and best practices in e-commerce development. We are dedicated to helping your business succeed online by creating a seamless and engaging e-commerce experience for your customers.
If you're looking to take your e-commerce business to the next level, KERNELIOUS can help. Contact us today to schedule a consultation and learn more about how we can help you achieve your e-commerce goals.</p>
      `,
      image: "assets/img/service/service-icon-10.1.png"
    },
    web_application: {
      service_name: "Web Application",
      description: `
<p class="pt-5">At KERNELIOUS, we specialize in custom web application development services that are designed to meet the unique needs of our clients. Our team of experienced developers work closely with you to understand your business goals and create a web application that is tailored to your needs.</p>
<p class="pt-5">Our web application development services include:</p>
<p class="pt-5"> • Custom Web Application Development: We develop custom web applications that are designed to improve the efficiency and effectiveness of your business processes. Our team of developers work with you to identify your business requirements and create a web application that fits your unique needs.</p>
<p class="pt-5"> • Mobile App Integration: We integrate mobile apps into your web application to create a seamless user experience across multiple devices. Our team is experienced in developing mobile apps for iOS and Android devices, and can help you reach your mobile audience.</p>
<p class="pt-5"> • API Development and Integration: We develop custom APIs to enable third-party integrations with your web application. This allows you to easily share data and integrate with other applications that are critical to your business.</p>
<p class="pt-5"> • Cloud-Based Development: We develop web applications that are hosted on the cloud to provide you with flexibility, scalability, and reliability. Our team of developers is experienced in developing web applications on cloud platforms such as Amazon Web Services (AWS) and Microsoft Azure.</p>
<p class="pt-5">Our team of developers are experienced in a wide range of web technologies, including HTML, CSS, JavaScript, PHP, and more. We are committed to staying up-to-date with the latest trends and best practices in web application development to ensure that your application is optimized for performance, security, and user experience.
If you're looking for custom web application development services, KERNELIOUS can help. Contact us today to schedule a consultation and learn more about how we can help bring your web application project to life.</p>
      `,
      image: "assets/img/service/service-icon-10.1.png"
    },

  }


  data = {
    service_name: "Service Name",
    description: "service Description",
    image: "assets/img/service/service-icon-10.1.png"

  }


  constructor(public router: Router) {
    if(this.router.url.includes("uiux")){
      this.data = this.services.uiux
    }
    if(this.router.url.includes("E-commerce")){
      this.data = this.services.e_commerce
    }
    if(this.router.url.includes("web-application")){
      this.data = this.services.web_application
    }

  }




}
