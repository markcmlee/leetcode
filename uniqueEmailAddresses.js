// https://leetcode.com/problems/unique-email-addresses/

const numUniqueEmails = (emails) => {
  return new Set(emails.map(email => {
      const [local, domain] = email.split("@");
      return `${local.split('+')[0].split('.').join("")}@${domain}`;
  })).size
}