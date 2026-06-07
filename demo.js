const leads = [
  {
    name: "Rahul",
    email: "rahul@gmail.com",
    company: "ABC Tech"
  },
  {
    name: "Anita",
    email: "anita@gmail.com",
    company: "Startup Labs"
  }
];

console.log("Starting Automated Outreach Pipeline...\n");

async function sendEmails() {

  for (const lead of leads) {

    console.log("-----------------------------------");
    console.log(`Sending email to: ${lead.name}`);
    console.log(`Company: ${lead.company}`);
    console.log(`Email: ${lead.email}`);

    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log(`✅ Email successfully sent to ${lead.email}\n`);
  }

  console.log("-----------------------------------");
  console.log("🎉 Outreach automation completed!");
}

sendEmails();