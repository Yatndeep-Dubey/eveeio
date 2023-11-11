import { Popup } from "../../props";

const Refund_Policy = () => {
  return (
    <div>
      <Popup
        title="Refund Policy"
        content={
          <div className="text-justify">
            <p className="text-sm text-gray-500">
            Their is no refund policy applicable on vehicle rental model.
            After taking subscription for Rental of Vehicles, their will be no refund of amount
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Refund_Policy;
