import { Potential } from "../../props";

const Potentials = () => {
  return (
    <section className="my-10 p-5">
      <p className="text-xl font-bold uppercase text-primary text-center md:text-3xl lg:text-4xl">
        Unlock the Potential of IoT
      </p>
      <p className="text-grayish text-xs text-center mt-3 md:text-sm lg:text-lg">
        INSTALL OUR SMART DEVICES FOR SEAMLESS CONNECTIVITY AND EMPOWER YOUR
        EVERYDAY LIFE
      </p>

      <div className="my-10 flex flex-col gap-7">
        <Potential
          title="Enhanced Fleet Management"
          description="IoT devices provide real-time monitoring and tracking of rental EVs. Fleet managers can access data on vehicle location, status, and performance remotely. This enables efficient fleet management, optimized utilization, and timely maintenance of the vehicles."
          image="images/potentials/fleet.svg"
          customClass="lg:flex-row"
        />

        <Potential
          title="Remote Vehicle Control"
          description="IoT devices allow remote control of certain vehicle functions. Rental companies can remotely lock/unlock the EVs, monitor battery levels, and even disable or enable certain features based on rental agreements or specific requirements. This control improves security and ensures adherence to rental terms."
          image="images/potentials/remote.svg"
          customClass="lg:flex-row-reverse"
        />

        <Potential
          title="Geofencing and Boundary Management"
          description="Geofencing is the practice of creating virtual boundaries within specific geographical areas. IoT devices in rental EVs can enable geofencing, helping rental companies monitor if vehicles are operating within authorized zones. This feature can prevent unauthorized use, track vehicle movement, and enhance overall security."
          image="images/potentials/geofencing.svg"
          customClass="lg:flex-row"
        />

        <Potential
          title="Condition Monitoring and Predictive Maintenance"
          description="IoT sensors installed in rental EVs can collect and transmit data on various parameters, such as battery health, charging status, tire pressure, and vehicle diagnostics. This data enables proactive monitoring of vehicle conditions, allowing rental companies to perform predictive maintenance, address potential issues before they become major problems, and minimize downtime."
          image="images/potentials/maintenance.svg"
          customClass="lg:flex-row-reverse"
        />

        <Potential
          title="Optimized Charging Infrastructure"
          description="IoT devices in EVs can communicate with charging stations or infrastructure, providing data on charging requirements, charging progress, and available charging stations nearby. This information enables rental companies to optimize the charging process, plan efficient routes, and provide accurate charging recommendations to renters."
          image="images/potentials/charging.svg"
          customClass="lg:flex-row"
        />

        <Potential
          title="Sustainability and Efficiency"
          description="By leveraging IoT technology, rental companies can promote sustainable practices and improve operational efficiency. IoT-enabled EVs can optimize energy consumption, reduce carbon emissions, and contribute to a greener transportation ecosystem. Additionally, efficient fleet management and predictive maintenance minimize resource wastage and increase operational efficiency."
          image="images/potentials/efficiency.svg"
          customClass="lg:flex-row-reverse"
        />
      </div>
    </section>
  );
};

export default Potentials;
