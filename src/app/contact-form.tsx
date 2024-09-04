"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-16 bg-gray">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="text-4xl font-bold mb-4">
          Contact Us
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-8/12 text-gray-700"
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray-300 rounded-lg">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-8">
            <div className="w-full col-span-3 bg-gray-800 text-white rounded-lg p-8 md:p-12">
              <Typography variant="h4" className="text-2xl font-semibold mb-4">
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="text-base mb-6"
              >
                Fill up the form and our Team will get back to you within 24 hours.
              </Typography>
              <div className="flex items-center gap-4 mb-4">
                <PhoneIcon className="h-6 w-6" />
                <Typography variant="h6" className="text-lg">
                  +1(424) 535 3523
                </Typography>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <EnvelopeIcon className="h-6 w-6" />
                <Typography variant="h6" className="text-lg">
                  hello@mail.com
                </Typography>
              </div>
              <div className="flex items-center gap-4 mb-8">
                <TicketIcon className="h-6 w-6" />
                <Typography variant="h6" className="text-lg">
                  Open Support Ticket
                </Typography>
              </div>
              <div className="flex items-center gap-4">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4">
              <form action="#" className="space-y-8">
                <div className="grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="first-name"
                    placeholder="eg. Lucas"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="last-name"
                    placeholder="eg. Jones"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  placeholder="eg. lucas@mail.com"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                />
                <Typography
                  variant="lead"
                  className="text-blue-gray-600 text-sm mb-2"
                >
                  What are you interested in?
                </Typography>
                <div className="space-y-2">
                  {/* @ts-ignore */}
                  <Radio
                    color="gray"
                    name="type"
                    label="Design"
                    defaultChecked
                  />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Development" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Support" />
                  {/* @ts-ignore */}
                  <Radio color="gray" name="type" label="Other" />
                </div>
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button className="w-full md:w-auto" color="blue" size="md">
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
