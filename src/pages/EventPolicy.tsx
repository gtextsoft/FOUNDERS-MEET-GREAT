import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { EVENT_DATE_DISPLAY } from "@/lib/event";

const EventPolicy = () => (
  <LegalPageLayout title="Event Policy" updated="23 July 2026">
    <section>
      <h2>About this policy</h2>
      <p>
        This Event Policy applies to attendance at the London CEO &amp; Founders Meet &amp; Greet on {EVENT_DATE_DISPLAY}, hosted by the Stephen Akintayo Foundation and Dr. Stephen Akintayo.
      </p>
      <p>
        By registering for or attending the event, you agree to the terms below.
      </p>
    </section>

    <section>
      <h2>Registration</h2>
      <ul>
        <li>Registration is required to attend.</li>
        <li>Each registration is for one attendee unless otherwise confirmed in writing by the event team.</li>
        <li>You must provide accurate contact details so we can send venue information and event updates.</li>
        <li>Submitting a registration does not guarantee admission if capacity is reached. The team will confirm attendance where applicable.</li>
      </ul>
    </section>

    <section>
      <h2>Attendance and conduct</h2>
      <p>Attendees are expected to:</p>
      <ul>
        <li>Arrive on time and follow the published event schedule</li>
        <li>Behave professionally and respectfully toward speakers, staff, and other guests</li>
        <li>Follow venue rules, security instructions, and any reasonable requests from event organizers</li>
      </ul>
      <p>
        We reserve the right to refuse entry or remove any attendee whose conduct disrupts the event or creates risk for others, without refund where fees apply.
      </p>
    </section>

    <section>
      <h2>Venue and event changes</h2>
      <p>
        Venue details are shared with registered attendees by email or other direct communication. The event date, time, format, speakers, or venue may be changed due to operational, safety, or logistical reasons. Registered attendees will be notified of material changes as soon as reasonably possible.
      </p>
    </section>

    <section>
      <h2>Photography and media</h2>
      <p>
        The event may be photographed or recorded for promotional, educational, or archival purposes. By attending, you consent to being included in event photos or recordings unless you notify event staff on arrival that you do not wish to be featured.
      </p>
    </section>

    <section>
      <h2>Cancellations and refunds</h2>
      <p>
        If you can no longer attend, contact{" "}
        <a href="mailto:products@stephenakintayo.com">products@stephenakintayo.com</a> as early as possible. Refund eligibility, if any, depends on the ticket or registration terms communicated to you at the time of booking.
      </p>
      <p>
        If the event is cancelled by the organizers, registered attendees will be informed and any applicable refund or transfer options will be communicated.
      </p>
    </section>

    <section>
      <h2>Liability</h2>
      <p>
        Attendance is at your own risk. To the fullest extent permitted by law, the organizers are not liable for personal injury, loss, theft, or damage to property except where liability cannot be excluded by law.
      </p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>
        For registration, venue, or policy questions, contact{" "}
        <a href="mailto:products@stephenakintayo.com">products@stephenakintayo.com</a> or call{" "}
        <a href="tel:+12815050527">+1 (281) 505-0527</a> /{" "}
        <a href="tel:+2348167901719">+234 816 790 1719</a>.
      </p>
    </section>
  </LegalPageLayout>
);

export default EventPolicy;
