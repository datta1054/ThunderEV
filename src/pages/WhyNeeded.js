import React, { useState } from "react";
import styles from "./WhyNeeded.module.css";

const WhyNeeded = () => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 624;
  const text =
    "Electric vehicles are needed today because they offer a sustainable and environmentally friendly option for transportation. As the world experiences the impacts of climate change, reducing greenhouse gas emissions from transportation is crucial.\n\n" +
    " Electric vehicles emit zero tailpipe emissions and contribute less to air pollution, which is a serious health concern. \n\n" +
    "Electric vehicles reduce dependence on foreign oil supplies, making countries more energy independent.\n\n" +
    " The development of electric vehicles is driving technological innovation and creating new opportunities for the automotive industry. While the upfront cost of electric vehicles may be higher, they offer cost savings in the long run due to lower fuel and maintenance costs.\n\n" +
    "Electric vehicles have emerged as a crucial solution to the environmental issues arising from the use of traditional gasoline-powered vehicles. There are several reasons why electric vehicles are needed now more than ever before.\n\n" +
    " The environmental benefits of electric vehicles, the economic advantages of using them, and the technological advancements that have made them a feasible and practical option for drivers.\n\n" +
    "One of the primary reasons why electric vehicles are needed is the urgent need to reduce greenhouse gas emissions. According to the United Nations Intergovernmental Panel on Climate Change (IPCC), global carbon dioxide emissions must be reduced by 45% from 2010 levels by 2030 in order to limit global warming to 1.5°C. \n\n" +
    "Transportation is one of the largest contributors to greenhouse gas emissions, with gasoline-powered cars accounting for nearly one-fifth of the emissions in the US alone. Electric vehicles, on the other hand, produce no tailpipe emissions, making them a cleaner alternative to traditional vehicles.\n\n" +
    "In addition to their environmental benefits, electric vehicles offer several economic advantages. With rising gasoline prices and volatile oil markets, electric vehicles offer drivers a more stable and predictable cost of ownership. According to the US Department of Energy, electric vehicles are 57% cheaper to operate than gasoline vehicles. This is due to the fact that electricity is a more stable and reliable commodity than gasoline, which is subject to price fluctuations based on supply and demand. Moreover, electric vehicles require less maintenance than traditional vehicles, as they have fewer moving parts and do not require oil changes or other routine maintenance tasks.\n\n" +
    "Technological advancements have made electric vehicles a more feasible and practical option for drivers. Battery technology has improved significantly in recent years, allowing electric vehicles to achieve longer ranges on a single charge. The average electric vehicle today has a range of around 250 miles, with some models capable of traveling up to 400 miles on a single charge. Furthermore, the development of fast-charging infrastructure has made it possible to recharge electric vehicles quickly and conveniently. In many cases, electric vehicle owners can charge their cars at home overnight or at a public charging station in less than an hour.\n\n" +
    "Despite the many advantages of electric vehicles, there are still some challenges that must be addressed before they can become a mainstream mode of transportation. One of the biggest challenges is the high upfront cost of purchasing an electric vehicle. While the cost of electric vehicles has come down significantly in recent years, they still tend to be more expensive than comparable gasoline vehicles. However, this cost differential is expected to narrow as battery costs continue to decline and economies of scale are achieved in the production of electric vehicles.\n\n" +
    "Another challenge facing the electric vehicle industry is the need for more charging infrastructure. While there are already thousands of public charging stations across the US, there are still many areas where charging infrastructure is lacking. This can be a barrier to adoption for some drivers, particularly those who live in apartments or other dwellings where charging infrastructure is not readily available.\n\n" +
    "In conclusion, electric vehicles are needed now more than ever before as a solution to the environmental and economic challenges facing the transportation sector. With advances in technology and improvements in battery range and charging infrastructure, electric vehicles are becoming a more feasible and practical option for drivers. However, there are still some challenges that must be overcome before electric vehicles can become a mainstream mode of transportation, including high upfront costs and the need for more charging infrastructure. Nonetheless, the potential benefits of electric vehicles make them a compelling option for drivers looking to reduce their environmental impact and save money on operating costs.";

  const handleReadMoreClick = () => {
    setExpanded(!expanded);
  };

  const trimmedText = text.substring(0, maxLength);
  const bulletPoints = text
    .split("\n\n")
    .map((paragraph, index) => <li key={index}>{paragraph}</li>);
  const highlightedText = text.replace(
    /(greenhouse gas emissions|electric vehicles|gasoline-powered cars|tailpipe emissions|electricity|battery technology|charging infrastructure)/gi,
    "<span class='highlight'>$1</span>"
  );

  return (
    <div className={styles.product}>
      
      {!expanded && (
        <button className={styles.readMoreButton} onClick={handleReadMoreClick}>
          Read More
        </button>
      )}
      {expanded && (
        <button className={styles.readMoreButton} onClick={handleReadMoreClick}>
          Read Less
        </button>
      )}
      <ul className={styles.description}>
        {!expanded ? bulletPoints.slice(0, 4) : bulletPoints}
      </ul>

    </div>
  );
};

export default WhyNeeded;
