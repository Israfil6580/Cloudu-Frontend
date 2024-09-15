import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import reasonImage from "../../assets/Blogs/8reason.png";

const article = [
  {
    id: 1,
    title: "10 Strategies for Enhancing Remote Team Collaboration",
    date: "AUGUST 1, 2024",
    image: reasonImage,
    summary:
      "Remote work has become a staple in today's business environment. This article explores ten effective strategies to improve collaboration among remote teams, ensuring productivity and engagement despite physical distance.",
    content: [
      {
        heading: "Utilize Effective Communication Tools",
        paragraph:
          "Adopt communication tools that facilitate real-time conversations and document sharing. Platforms like Slack, Microsoft Teams, and Zoom help bridge the gap between remote team members, keeping everyone connected.",
      },
      {
        heading: "Implement Regular Check-Ins",
        paragraph:
          "Schedule frequent check-ins to discuss progress and address any issues. Regular virtual meetings help maintain alignment and provide an opportunity for team members to voice concerns.",
      },
      {
        heading: "Set Clear Goals and Expectations",
        paragraph:
          "Clearly define goals and expectations for each team member. Having well-established objectives ensures that everyone understands their responsibilities and can work towards common targets.",
      },
      {
        heading: "Foster a Culture of Trust",
        paragraph:
          "Build trust by encouraging transparency and open communication. Trusting your team members to manage their tasks effectively helps boost morale and productivity.",
      },
      {
        heading: "Encourage Social Interaction",
        paragraph:
          "Organize virtual social events to help team members build relationships. Social interactions, even in a virtual setting, can enhance team cohesion and collaboration.",
      },
      {
        heading: "Provide Adequate Resources and Support",
        paragraph:
          "Ensure that your team has access to the necessary tools and resources to perform their tasks efficiently. Providing support for technical issues or software needs helps maintain productivity.",
      },
    ],
    conclusion:
      "By implementing these strategies, remote teams can improve collaboration and productivity. Effective communication, regular check-ins, and a culture of trust are essential for maintaining a cohesive and successful remote work environment.",
  },
  {
    id: 2,
    title: "5 Key Benefits of Adopting Cloud-Based Solutions",
    date: "AUGUST 10, 2024",
    image: reasonImage,
    summary:
      "Cloud-based solutions offer numerous advantages for businesses. This article highlights five key benefits of adopting cloud technology, from cost savings to enhanced scalability.",
    content: [
      {
        heading: "Cost Savings",
        paragraph:
          "Cloud solutions often reduce the need for extensive hardware investments and maintenance. By leveraging cloud services, businesses can save on upfront costs and pay only for what they use.",
      },
      {
        heading: "Scalability",
        paragraph:
          "Cloud-based solutions provide the flexibility to scale resources up or down based on demand. This scalability allows businesses to adapt to changing needs without overcommitting resources.",
      },
      {
        heading: "Improved Accessibility",
        paragraph:
          "Accessing cloud services from anywhere with an internet connection enables remote work and collaboration. This improved accessibility ensures that team members can stay productive regardless of their location.",
      },
      {
        heading: "Enhanced Security",
        paragraph:
          "Many cloud providers offer advanced security features, including encryption and regular backups. These features help protect data from breaches and ensure business continuity.",
      },
      {
        heading: "Automatic Updates",
        paragraph:
          "Cloud solutions often come with automatic updates, ensuring that users always have access to the latest features and security patches without manual intervention.",
      },
    ],
    conclusion:
      "Adopting cloud-based solutions can lead to significant benefits, including cost savings, scalability, and improved accessibility. By leveraging cloud technology, businesses can enhance their operations and stay competitive.",
  },
  {
    id: 3,
    title: "How AI is Transforming Customer Service",
    date: "AUGUST 20, 2024",
    image: reasonImage,
    summary:
      "Artificial Intelligence (AI) is revolutionizing customer service by providing innovative solutions for enhancing customer interactions. This article explores how AI technologies are transforming the customer service landscape.",
    content: [
      {
        heading: "Chatbots and Virtual Assistants",
        paragraph:
          "AI-powered chatbots and virtual assistants provide instant responses to customer inquiries. These tools can handle routine questions and tasks, improving response times and customer satisfaction.",
      },
      {
        heading: "Personalized Customer Interactions",
        paragraph:
          "AI analyzes customer data to offer personalized recommendations and interactions. By understanding individual preferences, businesses can deliver tailored experiences that enhance customer loyalty.",
      },
      {
        heading: "Automated Ticketing Systems",
        paragraph:
          "AI-driven ticketing systems can automatically categorize and prioritize customer issues. This automation streamlines the support process and ensures that critical issues are addressed promptly.",
      },
      {
        heading: "Predictive Analytics",
        paragraph:
          "AI uses predictive analytics to anticipate customer needs and behaviors. By analyzing historical data, businesses can proactively address potential issues and improve overall service quality.",
      },
      {
        heading: "Enhanced Data Insights",
        paragraph:
          "AI provides valuable insights into customer interactions and feedback. These insights help businesses identify trends, measure satisfaction, and make data-driven decisions to improve customer service.",
      },
    ],
    conclusion:
      "AI technologies are significantly transforming customer service by offering innovative solutions for enhancing interactions and efficiency. Embracing AI can lead to improved customer satisfaction and operational excellence.",
  },
  {
    id: 4,
    title: "The Rise of Sustainable Business Practices",
    date: "SEPTEMBER 1, 2024",
    image: reasonImage,
    summary:
      "Sustainability is becoming a key focus for businesses around the world. This article examines the rise of sustainable business practices and their impact on the environment and corporate success.",
    content: [
      {
        heading: "Reducing Carbon Footprint",
        paragraph:
          "Businesses are increasingly adopting measures to reduce their carbon footprint, such as energy-efficient technologies and renewable energy sources. These actions contribute to environmental preservation and demonstrate corporate responsibility.",
      },
      {
        heading: "Sustainable Supply Chain Management",
        paragraph:
          "Implementing sustainable practices in the supply chain helps reduce waste and promote ethical sourcing. Businesses are working with suppliers to ensure environmentally friendly and socially responsible practices.",
      },
      {
        heading: "Eco-Friendly Product Design",
        paragraph:
          "Designing products with sustainability in mind involves using recyclable materials and minimizing waste. Eco-friendly product design not only benefits the environment but also attracts environmentally conscious consumers.",
      },
      {
        heading: "Corporate Social Responsibility",
        paragraph:
          "Corporate Social Responsibility (CSR) initiatives focus on giving back to communities and supporting environmental causes. Businesses that prioritize CSR build a positive reputation and foster stronger relationships with stakeholders.",
      },
      {
        heading: "Employee Engagement in Sustainability",
        paragraph:
          "Engaging employees in sustainability efforts enhances their sense of purpose and commitment. Businesses can promote sustainability through training, awareness programs, and encouraging green practices at the workplace.",
      },
    ],
    conclusion:
      "Adopting sustainable business practices is crucial for environmental preservation and corporate success. By focusing on reducing carbon footprints, managing supply chains sustainably, and engaging employees, businesses can contribute to a greener future and improve their overall impact.",
  },
  {
    id: 5,
    title: "Maximizing Efficiency with Project Management Software",
    date: "SEPTEMBER 10, 2024",
    image: reasonImage,
    summary:
      "Project management software plays a critical role in enhancing efficiency and organization. This article explores how to maximize efficiency using project management tools and best practices for successful project execution.",
    content: [
      {
        heading: "Selecting the Right Software",
        paragraph:
          "Choosing the right project management software involves evaluating features, integration capabilities, and user-friendliness. Select a tool that aligns with your team's needs and project requirements.",
      },
      {
        heading: "Setting Up Effective Workflows",
        paragraph:
          "Configure workflows within the software to streamline processes and ensure smooth project execution. Establish clear task assignments, deadlines, and milestones to keep projects on track.",
      },
      {
        heading: "Utilizing Project Tracking Features",
        paragraph:
          "Leverage project tracking features such as Gantt charts and task boards to monitor progress and identify potential issues. Real-time tracking helps teams stay informed and address challenges promptly.",
      },
      {
        heading: "Facilitating Team Collaboration",
        paragraph:
          "Project management software often includes collaboration tools that enhance team communication. Utilize these tools to share updates, documents, and feedback, ensuring that all team members are aligned.",
      },
      {
        heading: "Analyzing Project Data",
        paragraph:
          "Analyze project data and reports to assess performance and identify areas for improvement. Data-driven insights help in refining processes and making informed decisions for future projects.",
      },
    ],
    conclusion:
      "Maximizing efficiency with project management software involves selecting the right tool, setting up effective workflows, and utilizing tracking features. By facilitating collaboration and analyzing project data, teams can enhance their project execution and overall performance.",
  },
  {
    id: 6,
    title: "The Future of Digital Marketing: Trends to Watch",
    date: "SEPTEMBER 20, 2024",
    image: reasonImage,
    summary:
      "Digital marketing is evolving rapidly with new trends and technologies shaping the industry. This article highlights key trends to watch for in the future of digital marketing and their potential impact on businesses.",
    content: [
      {
        heading: "Artificial Intelligence in Marketing",
        paragraph:
          "AI is revolutionizing digital marketing by enabling personalized experiences, chatbots, and predictive analytics. Businesses are leveraging AI to enhance customer engagement and optimize marketing strategies.",
      },
      {
        heading: "Rise of Voice Search Optimization",
        paragraph:
          "With the increasing use of voice-activated devices, optimizing content for voice search is becoming crucial. Businesses need to adapt their SEO strategies to accommodate voice search queries and improve visibility.",
      },
      {
        heading: "Influencer Marketing Evolution",
        paragraph:
          "Influencer marketing continues to grow, with a shift towards micro-influencers and niche markets. Brands are focusing on building authentic partnerships with influencers to reach targeted audiences effectively.",
      },
      {
        heading: "Video Content Dominance",
        paragraph:
          "Video content remains a dominant force in digital marketing. From live streaming to short-form videos, businesses are using video to capture audience attention and convey their messages more engagingly.",
      },
      {
        heading: "Emphasis on Data Privacy",
        paragraph:
          "Data privacy is becoming a significant concern for consumers. Marketers need to prioritize transparent data practices and comply with regulations to build trust and maintain customer relationships.",
      },
    ],
    conclusion:
      "The future of digital marketing is shaped by trends such as AI, voice search optimization, and video content dominance. By staying informed about these trends and adapting strategies accordingly, businesses can effectively navigate the evolving digital landscape and achieve marketing success.",
  },
];

const BlogDetails = () => {
  const { title } = useParams();
  const blog = article.find((item) => item.title === title); // Find the blog by title

  if (!blog) {
    return <p>Blog not found!</p>; // Handle case where blog is not found
  }

  return (
    <div className="pt-20">
      <motion.div
        className="text-center pb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-green-600">{blog.date}</p>
        <h1 className="font-semibold text-[46px] leading-heading">
          {blog.title}
        </h1>
      </motion.div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full lg:h-[60vh] object-cover rounded-default"
        />
      </motion.div>
      <motion.div
        className="py-10 flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {blog.content.map((item, index) => (
          <motion.div
            className="flex flex-col gap-1"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-1 items-center">
              <span className="text-xl font-semibold">{index + 1}. </span>{" "}
              <p className="text-xl font-semibold">{item.heading}</p>
            </div>
            <p className="text-secondary">{item.paragraph}</p>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: blog.content.length * 0.2 + 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl font-semibold pb-4">Conclusion</h1>
          <p>{blog.conclusion}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
