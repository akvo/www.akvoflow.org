import React, { useState } from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Button, { ButtonExt } from "../../reusable/button";
import usePlanData from "../data";
import Check from "../../../images/check.svg";
import Cross from "../../../images/cross.svg";
import "./index.scss";

const PricingTab = () => {
  const { t } = useTranslation();
  const planData = usePlanData();
  const [selected, setSelected] = useState("flow-basic");
  const selectedPlan = planData.find((plan) => plan.id === selected);

  const isSelected = (plan) => selectedPlan.id === plan;

  return (
    <div className="pricing-mobile">
      <ul className="tab-list">
        <li
          className={`list-item ${isSelected("flow-basic") && "selected"}`}
          onClick={() => setSelected("flow-basic")}
          onKeyDown={() => setSelected("flow-basic")}
          role="presentation"
        >
          Flow Basic
        </li>
        <li
          className={`list-item ${isSelected("flow-pro-plus") && "selected"}`}
          onClick={() => setSelected("flow-pro-plus")}
          onKeyDown={() => setSelected("flow-pro-plus")}
          role="presentation"
        >
          Flow Custom
        </li>
      </ul>

      <div className="plan">
        {selected === "flow-pro-plus" && (
          <div className="most-popular">
            <Trans>Most popular</Trans>
          </div>
        )}
        <h3 className="plan-name">{selectedPlan.name}</h3>
        <div className="plan-price">{selectedPlan.price}</div>
        <small className="plan-note">{selectedPlan.note}</small>
        {selectedPlan.id === "flow-pro-plus" ? (
          <Button type="filled" text={t("Contact sales")} linkTo="/contact" />
        ) : (
          <ButtonExt
            type="filled"
            text={t("Get started")}
            linkTo="https://basic.akvoflow.org"
          />
        )}
      </div>

      <table className="features-table">
        <tbody>
          <tr className="features-row">
            <td className="feature">
              <b>
                <Trans>Features</Trans>
              </b>
            </td>
            <td className="empty-row"></td>
          </tr>
          {selectedPlan.features.map((feature, index) => {
            return (
              <tr key={index} className="features-row">
                <td className="feature-name">{feature.name}</td>
                <td className="feature-value">
                  {feature.value === "yes" ? (
                    <div className="check">
                      <Check />
                    </div>
                  ) : feature.value === "no" ? (
                    <div className="cross">
                      <Cross />
                    </div>
                  ) : (
                    feature.value
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <small className="note">
        <Trans>
          *PowerBI integration will be gauged based on familiarity with the tool
          by the partner
        </Trans>
      </small>
    </div>
  );
};

export default PricingTab;
