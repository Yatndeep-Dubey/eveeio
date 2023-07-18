import { Popup } from "../../props";

const Disclaimer = () => {
  return (
    <div>
      <Popup
        title="Disclaimer"
        content={
          <div className="text-justify">
            <p className="text-sm text-gray-500">
              The information contained in this website is for general
              information purposes only. The information is provided by
              <span className="text-blakish"> "The Company"</span> and while we
              endeavour to keep the information up to date and correct, we make
              no representations or warranties of any kind, express or implied,
              about the completeness, accuracy, reliability, suitability or
              availability with respect to the website or the information,
              products, services, or related graphics contained on the website
              for any purpose. Any reliance you place on such information is
              therefore strictly at your own risk.
            </p>

            <br />

            <p className="text-sm text-gray-500">
              In no event will we be liable for any loss or damage including
              without limitation, indirect or consequential loss or damage, or
              any loss or damage whatsoever arising from loss of data or profits
              arising out of, or in connection with, the use of this website.
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Disclaimer;
