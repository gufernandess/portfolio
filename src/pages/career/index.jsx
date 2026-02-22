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
} from "./styles";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { DotWrapper, Tooltip } from "./styles";

const Career = () => {
  const { t } = useTranslation();
  const career = t("career", { returnObjects: true });

  return (
    <CareerContainer id="career">
      <CareerTitle>{career.title}</CareerTitle>

      <Timeline>
        {career.items.map((item, idx) => {
          const pos = idx % 2 === 0 ? "top" : "bottom"; // idx 0 -> ponto 1 (ímpar) acima

          return (
            <TimelineItem key={idx}>
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
                {pos === "top" ? (
                  <>
                    <TimelineContent position={pos}>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemSubtitle>{item.subtitle}</ItemSubtitle>
                      <ItemText>{item.text}</ItemText>
                    </TimelineContent>

                    <DotWrapper position={pos}>
                      <TimelineDot className="dot" />
                      <Tooltip className="tooltip" position={pos}>
                        <ItemTitle style={{ color: "var(--almost-yellow)", marginBottom: "0.25rem" }}>{item.title}</ItemTitle>
                        <ItemText style={{ color: "var(--some-white)", marginTop: 0 }}>{item.detail || item.text}</ItemText>
                      </Tooltip>
                    </DotWrapper>
                  </>
                ) : (
                  <>
                    <DotWrapper position={pos}>
                      <TimelineDot className="dot" />
                      <Tooltip className="tooltip" position={pos}>
                        <ItemTitle style={{ color: "var(--almost-yellow)", marginBottom: "0.25rem" }}>{item.title}</ItemTitle>
                        <ItemText style={{ color: "var(--some-white)", marginTop: 0 }}>{item.detail || item.text}</ItemText>
                      </Tooltip>
                    </DotWrapper>

                    <TimelineContent position={pos}>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemSubtitle>{item.subtitle}</ItemSubtitle>
                      <ItemText>{item.text}</ItemText>
                    </TimelineContent>
                  </>
                )}
              </motion.div>
            </TimelineItem>
          );
        })}
      </Timeline>
    </CareerContainer>
  );
};

export default Career;
