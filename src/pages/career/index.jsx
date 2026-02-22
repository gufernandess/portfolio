import {
  CareerContainer,
  CareerTitle,
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  ItemTitle,
  ItemSubtitle,
  ItemText,
  MobileDetail,
} from "./styles";
import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../animations/fade";
import { useTranslation } from "react-i18next";
import { DotWrapper, Tooltip } from "./styles";

const MotionCareerTitle = motion(CareerTitle);
const MotionTimeline = motion(Timeline);

// highlights keywords in tooltip text by wrapping matches with a pink span
const KEYWORDS = [
  "React.js",
  "React",
  "TypeScript",
  "Astro",
  "Strapi",
  "CRM",
  "PIX",
  "Boleto",
  "Jest",
  "SonarQube",
  "SPA",
  "Selenium",
  "Java",
  "Automação",
  "Automation",
  "mensageria",
  "background jobs",
  "deploy",
  "integrations",
  "integration",
];

function highlightText(text) {
  if (!text || typeof text !== "string") return text;
  const pattern = KEYWORDS.map((k) =>
    k.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&"),
  ).join("|");
  const parts = text.split(new RegExp(`(${pattern})`, "gi"));
  return parts.map((part, i) => {
    if (!part) return null;
    // check if part matches any keyword (case-insensitive)
    const isMatch = new RegExp(`^(${pattern})$`, "i").test(part);
    if (isMatch) {
      return (
        <span key={i} style={{ color: "var(--hot-pink)", fontWeight: 600 }}>
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

const Career = () => {
  const { t } = useTranslation();
  const career = t("career", { returnObjects: true });

  return (
    <CareerContainer id="career">
      <MotionCareerTitle
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft(0.1)}
      >
        {career.title}
      </MotionCareerTitle>

      <MotionTimeline
        initial="hidden"
        whileInView="visible"
        variants={fadeInFromLeft(0.2)}
      >
        {(career.items || [])
          .slice()
          .reverse()
          .map((item, idx) => {
            const pos = idx % 2 === 0 ? "top" : "bottom";
            const mobilePos = idx % 2 === 0 ? "left" : "right";

            return (
              <TimelineItem key={idx} data-position={mobilePos}>
                <DotWrapper position={pos}>
                  <TimelineDot className="dot" />
                  <Tooltip className="tooltip" position={pos}>
                    <ItemText
                      style={{ color: "var(--some-white)", marginTop: 0 }}
                    >
                      {highlightText(item.detail || item.text)}
                    </ItemText>
                  </Tooltip>
                </DotWrapper>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.12 }}
                  viewport={{ once: true }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <TimelineContent position={pos}>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemSubtitle>{item.subtitle}</ItemSubtitle>
                    <ItemText>{item.text}</ItemText>
                    <MobileDetail>
                      <ItemText
                        style={{ color: "var(--some-white)", marginTop: 0 }}
                      >
                        {highlightText(item.detail || item.text)}
                      </ItemText>
                    </MobileDetail>
                  </TimelineContent>
                </motion.div>
              </TimelineItem>
            );
          })}
      </MotionTimeline>
    </CareerContainer>
  );
};

export default Career;
