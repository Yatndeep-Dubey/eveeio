import { Popup } from "../../props";

const Privacy = () => {
  return (
    <div>
      <Popup
        title="Privacy & Policy"
        content={
          <div className="text-justify">
            <p className="text-sm text-gray-500">
              We are committed to protecting your privacy. We will only use the
              information that we collect about you lawfully (in accordance with
              the Data Protection Act 1998 and GDPR). We collect information
              about you for 2 reasons: firstly, to process your order and
              second, to provide you with the best possible service. We will not
              e-mail you in the future unless you have given us your consent. We
              will give you the chance to refuse any marketing email from us in
              the future. The type of information we will collect about you
              includes: your name, address, phone number, email address. We will
              never collect sensitive information about you without your
              explicit consent. The information we hold will be accurate and up
              to date. You can check the information that we hold about you by
              emailing us. If you find any inaccuracies we will delete or
              correct it promptly. The personal information which we hold will
              be held securely in accordance with our internal security policy
              and the law.
            </p>

            <br />

            <p className="text-sm text-gray-500">
              We may use technology to track the patterns of behaviour of
              visitors to our site. This can include using a "cookie" which
              would be stored on your browser. You can usually modify your
              browser to prevent this happening. The information collected in
              this way can be used to identify you unless you modify your
              browser settings. If you have any questions/comments about
              privacy, you should email us at
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Privacy;
