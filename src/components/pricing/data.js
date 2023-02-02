import { useTranslation } from "gatsby-plugin-react-i18next";

const usePlanData = () => {
  const { t } = useTranslation();
  return [
    {
      id: "flow-basic",
      name: "Flow Basic",
      price: "£0/m",
      note: t("*Only for new clients"),
      features: [
        { name: t("Languages"), value: "EN/FR/ES" },
        { name: t("Configuration"), value: t("Self service") },
        { name: t("Survey editor"), value: "yes" },
        { name: t("Data point submissions"), value: t("300 Max.") },
        { name: t("Data export formats"), value: 1 },
        {
          name: t("Data monitoring (multiple forms within a survey)"),
          value: "no",
        },
        { name: t("User management"), value: t("user", {count: 1}) },
        { name: t("Link to mobile data collection App (*Android)"), value: "yes" },
        { name: t("Webforms"), value: "no" },
        { name: `${t("PowerBI integration")}*`, value: "no" },
        { name: t("Help desk and support (in English)"), value: "no" },
      ],
    },

    {
      id: "flow-pro",
      name: "Flow Pro",
      price: "£350/m",
      note: t("*Only for new clients"),
      features: [
        { name: t("Languages"), value: "EN/FR/ES" },
        { name: t("Configuration"), value: t("Self service") },
        { name: t("Survey editor"), value: "yes" },
        { name: t("Data point submissions"), value: t("1000 Max.") },
        { name: t("Data export formats"), value: 2 },
        {
          name: t("Data monitoring (multiple forms within a survey)"),
          value: "yes",
        },
        { name: t("User management"), value: t("user", {count:4}) },
        { name: t("Link to mobile data collection App (*Android)"), value: "yes" },
        { name: t("Webforms"), value: "yes" },
        { name: t("PowerBI integration*"), value: "yes" },
        {
          name: t("Help desk and support (in English)"),
          value: t("Service package inc."),
        },
      ],
    },

    {
      id: "flow-pro-plus",
      name: "Flow Pro +",
      price: t("Custom"),
      note: t("Get more from your plan"),
      features: [
        { name: t("Languages"), value: "EN/FR/ES" },
        { name: t("Configuration"), value: t("Configuration service") },
        { name: t("Survey editor"), value: "yes" },
        { name: t("Data point submissions"), value: t("Based on org. needs") },
        { name: t("Data export formats"), value: 4 },
        {
          name: t("Data monitoring (multiple forms within a survey)"),
          value: "yes",
        },
        { name: t("User management"), value: t("Unlimited users") },
        { name: t("Link to mobile data collection App (*Android)"), value: "yes" },
        { name: t("Webforms"), value: "yes" },
        { name: t("PowerBI integration*"), value: "yes" },
        {
          name: t("Help desk and support (in English)"),
          value: t("Service package inc."),
        },
      ],
    },
  ];
};

export default usePlanData;
