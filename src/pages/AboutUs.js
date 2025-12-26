import React from "react";
import { motion } from "framer-motion";
import QuickEnquiry from "../components/QuickEnquiry";
import CTASection from "../components/CTASection";
import "../styles/AboutUs.css";

const AboutUs = () => {
	const [expanded, setExpanded] = React.useState(false);
	return (
		<div className="aboutus-container">
			{/* Hero Section */}
			<motion.div
				className="aboutus-hero"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				viewport={{ once: true }}
			>
				<img
					src="/assets/images/3.jpeg"
					alt="About Us Hero"
					className="aboutus-hero-bg"
				/>
				<div className="aboutus-hero-overlay">
					<h1>
						About <span className="aboutus-highlight">Us</span>
					</h1>
					<p>
						A perfect hall made for weddings, receptions, and family events with all the facilities you need.
					</p>
				</div>
			</motion.div>

			{/* Our Story Section - Figma Layout */}
				<motion.section
					className="our-story-section"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					viewport={{ once: true }}
				>
					{/* First Block: image left, content right */}
					<motion.div
						className="story-block first-block"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0, ease: 'easeOut' }}
						viewport={{ once: true }}
					>
						<div className="story-image">
							<img src="/assets/images/IMG_8502.jpg" alt="Our Story 1" />
						</div>
						<div className="story-content">
							<h2>Our Story</h2>
							<p>Ram Seetha Hall was established in 2019 with a heartfelt purpose, to create a dignified, well-maintained space where families could celebrate life's most cherished milestones with grace and ease. Conceived and developed under the guidance of Mr. Shankar Subramaniam, the hall embodies the principles, discipline, and quiet sincerity that have defined his long standing journey in the field of construction.</p>
							<p>With nearly two decades of experience and over 106 residential projects completed through Abhiraj Constructions, his work has always been guided by values of cleanliness, integrity, and long term responsibility. These are not just professional standards but personal commitments, and they naturally extend into the way Ram Seetha Hall is run today. It is not maintained as a commercial venue alone, but as a space that honours culture, community, and tradition with the respect they deserve.</p>
							{!expanded && (
								<button className="read-more-btn" onClick={() => setExpanded(true)}>Read More to know</button>
							)}
						</div>
					</motion.div>
					{/* Expanded Section: Second & Third Blocks */}
					{expanded && (
						<div className="expanded-story-blocks">
							{/* Second Block: image right, content left */}
							<motion.div
								className="story-block second-block"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
								viewport={{ once: true }}
							>
								<div className="story-content">
									<p>Over the years, the hall has earned a reputation for its orderly environment, dependable facilities, and the quiet discipline with which it is cared for. Families who choose the venue often speak about its peaceful atmosphere and the immediate sense of trust it inspires, a reflection of the intention and value system behind its creation.</p>
									<p>Since opening its doors, Ram Seetha Hall has successfully hosted over 200 weddings, along with numerous receptions, engagements, and family ceremonies. At the same time, it has welcomed religious gatherings, spiritual events, cultural programmes, and upanayanams, often extending the space at significant concessions, and in many cases, free of cost. These gestures speak to the founder's belief in community service and his desire to uphold cultural practices with dignity and accessibility.</p>
								</div>
								<div className="story-image">
									<img src="/assets/images/2.jpeg" alt="Our Story 2" />
								</div>
							</motion.div>
							{/* Third Block: image left, content right */}
							<motion.div
								className="story-block third-block"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
								viewport={{ once: true }}
							>
								<div className="story-image">
									<img src="/assets/images/1Y9A8980.jpg" alt="Our Story 3" />
								</div>
								<div className="story-content">
									<p>Every aspect of the hall, from cleanliness and organisation to ambience and upkeep is maintained with the conviction that events rooted in tradition should unfold in an environment that reflects refinement, discipline, and sincerity. As a result, Ram Seetha Hall has become known not only for its superior standards but also for its warmth, reliability, and the meaningful experiences it enables.</p>
									<p>Today, Ram Seetha Hall stands as a venue built with care, strengthened by values, and cherished by families who seek a place where tradition and comfort come together. It remains committed to offering a space where memories are created just as it was envisioned from the start.</p>
								</div>
							</motion.div>
						</div>
					)}
				</motion.section>
			{/* Quick Enquiry Section */}
			<QuickEnquiry />

			{/* Vision & Mission Section */}
				<motion.section
					className="vision-mission-section"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					viewport={{ once: true }}
				>
					<h2 className="vision-mission-title">What Drives Ram Seetha Hall Forward</h2>
					<div className="vision-mission-cards">
						{/* Vision Card */}
						<motion.div
							className="vision-mission-card"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0, ease: 'easeOut' }}
							viewport={{ once: true }}
						>
							<div className="vision-mission-icon">
								{/* No animation for the icon image */}
								<img src="/assets/icons/vision.png" alt="Vision Icon" width="48" height="48" />
							</div>
							<h3 className="vision-mission-heading">Our Vision</h3>
							<p className="vision-mission-text">
								To be a cherished and trusted destination where tradition is honoured, values are upheld, and every celebration is elevated with dignity, beauty, and heartfelt service, creating a venue that families instinctively choose for their most precious and irreplaceable moments.
							</p>
						</motion.div>
						{/* Mission Card */}
						<motion.div
							className="vision-mission-card"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
							viewport={{ once: true }}
						>
							<div className="vision-mission-icon">
								<img src="/assets/icons/mission.png" alt="Mission Icon" width="48" height="48" />
							</div>
							<h3 className="vision-mission-heading">Our Mission</h3>
							<p className="vision-mission-text">
								To provide thoughtful facilities, dedicated support, and a serene, refined atmosphere where weddings, rituals, and sacred gatherings unfold with meaning, grace, and the utmost care, ensuring every occasion becomes a memory to treasure.
							</p>
						</motion.div>
					</div>
				</motion.section>
      {/* CTA Section */}
			<CTASection />
		</div>
	);
};

export default AboutUs;
