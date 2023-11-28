import React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Button, { ButtonExt } from "../../reusable/button/index";
import Check from "../../../images/check.svg";
import Cross from "../../../images/cross.svg";
import "./index.scss";

const PricingTable = () => {
  const { t } = useTranslation();
  return (
    <div className="pricing">
      <h3>
        <Trans>Choose your plan</Trans>
      </h3>
      <table>
        <tbody>
          <tr className="most-popular">
            <td></td>
            <td></td>
            <td>
              <div>
                <Trans>Most popular</Trans>
              </div>
            </td>
          </tr>

          <tr className="plan-type">
            <th>&nbsp;</th>
            <th>Flow Basic</th>
            <th>Flow Pro +</th>
          </tr>
          <tr className="plan-price">
            <td></td>
            <td>
              <div className="wrapper">
                <div>Free</div>
                <span>
                  <Trans>*Only for new clients</Trans>
                </span>
              </div>
            </td>
            <td>
              <div className="wrapper">
                <div>
                  <Trans>Custom</Trans>
                </div>
                <span>
                  <Trans>Get more from your plan</Trans>
                </span>
              </div>
            </td>
          </tr>
          <tr className="features">
            <td>
              <Trans>Features</Trans>
            </td>
            <td>
              <ButtonExt
                type="filled"
                text={t("Get started")}
                linkTo="https://basic.akvoflow.org"
              />
            </td>
            <td>
              <Button
                type="filled"
                text={t("Contact sales")}
                linkTo="/contact"
              />
            </td>
          </tr>
          <tr className="languages">
            <td>
              <Trans>Languages</Trans>
            </td>
            <td>EN/FR/ES</td>
            <td>EN/FR/ES</td>
          </tr>
          <tr className="configuration">
            <td>
              <Trans>Configuration</Trans>
            </td>
            <td>
              <Trans>Self service</Trans>
            </td>
            <td>
              <Trans>Configuration service</Trans>
            </td>
          </tr>
          <tr className="editor">
            <td>
              <Trans>Survey editor</Trans>
            </td>
            <td className="check" aria-label="yes">
              <Check />
            </td>
            <td className="check" aria-label="yes">
              <Check />
            </td>
          </tr>
          <tr className="data-submission">
            <td>
              <Trans>Data point submissions</Trans>
            </td>
            <td>
              <Trans>300 Max.</Trans>
            </td>
            <td>
              <Trans>Based on org. needs</Trans>
            </td>
          </tr>
          <tr className="export-format">
            <td>
              <Trans>Data export formats</Trans>
            </td>
            <td>1</td>
            <td>4</td>
          </tr>
          <tr className="monitoring">
            <td>
              <Trans>Data monitoring (multiple forms within a survey)</Trans>
            </td>
            <td>
              <Cross />
            </td>
            <td className="check" aria-label="yes">
              <Check />
            </td>
          </tr>
          <tr className="user-management">
            <td>
              <Trans>User management</Trans>
            </td>
            <td>
              <Trans i18nKey="user" count={1}>1 user</Trans>
            </td>
            <td>
              <Trans>Unlimited users</Trans>
            </td>
          </tr>
          <tr className="device-link">
            <td>
              <Trans>Link to mobile data collection App (*Android)</Trans>
            </td>
            <td className="check" aria-label="yes">
              <Check />
            </td>
            <td className="check" aria-label="yes">
              <Check />
            </td>
          </tr>
          <tr className="form">
            <td>
              <Trans>Webforms</Trans>
            </td>
            <td>
              <Cross />
            </td>
            <td className="check" aria-label="yes">
              <Check />
            </td>
          </tr>
          <tr className="integration">
            <td>
              <Trans>PowerBI integration</Trans>*
            </td>
            <td>
              <Cross />
            </td>
            <td className="check" aria-label="yes">
              <Check />
            </td>
          </tr>
          <tr className="support">
            <td>
              <Trans>Help desk and support (in English)</Trans>
            </td>
            <td>
              <Cross />
            </td>
            <td>
              <Trans>Service package inc.</Trans>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <small className="note">
                <Trans>
                  *PowerBI integration will be gauged based on familiarity with the tool
                  by the partner
                </Trans>
              </small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable;
