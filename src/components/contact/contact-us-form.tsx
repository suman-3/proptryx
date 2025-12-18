import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSubmit } from "@formspree/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import BlurFade from "../shared/blur-fade";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name is required",
  }),
  email: z.string().email({
    message: "email is required",
  }),
  phone: z.string().min(10, {
    message: "phone number is required",
  }),
  message: z.string().min(2, {
    message: "message is required",
  }),
});

export const ContactForm = () => {
  const submitToFormspree = useSubmit("xojaabwa");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await submitToFormspree(values);

      form.reset();
      toast.success("Message Sent Successfully");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  }

  return (
    <div className="w-full h-full bg-gray">
      <div className="w-full flex flex-col lg:flex-row min-h-svh lg:min-h-lvh px-6 md:px-14 2xl:px-64 pt-20 md:pt-28 lg:pt-32 pb-10 md:pb-16 gap-8 lg:gap-12">
        {/* Left Column - Contact Info */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center mt-3 md:mt-0">
          <div className="w-full flex flex-col items-start space-y-2 md:space-y-5">
            <BlurFade delay={0.2} inView>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium w-full leading-tight md:leading-snug lg:leading-[70px] tracking-wide text-black font-spaceGrotesk">
                Get in touch with us.
              </h1>
            </BlurFade>

            <BlurFade delay={0.25} inView>
              <p className="w-full md:w-[85%] lg:w-[80%] text-black text-sm md:text-base lg:text-[1.1rem] leading-6 md:leading-7 lg:leading-[30px] font-manrope">
                We're here 24×7 to support you — whether it's assistance,
                product demos or platform queries.
              </p>
            </BlurFade>

            <div className="flex flex-col gap-5 md:gap-6 pt-4">
              {/* Phone Support */}
              <BlurFade delay={0.3} inView>
                <div className="flex flex-col gap-2">
                  <p className="w-full text-base md:text-lg lg:text-xl leading-6 md:leading-7 font-medium text-black font-spaceGrotesk">
                    Phone Support
                  </p>
                  <div className="flex gap-2.5 items-start">
                    <img
                      src="/contact/icon/3.svg"
                      alt="phone icon"
                      className="mt-1 size-4 md:size-5 shrink-0"
                    />
                    <a
                      href="tel:+917044454300"
                      className="w-full text-sm md:text-base leading-6 md:leading-[27px] text-black/80 font-manrope hover:underline hover:text-black transition-colors"
                    >
                      +91 70444 54300
                    </a>
                  </div>
                </div>
              </BlurFade>

              {/* Email Support */}
              <BlurFade delay={0.3} inView>
                <div className="flex flex-col gap-2">
                  <p className="w-full text-base md:text-lg lg:text-xl leading-6 md:leading-7 font-medium text-black font-spaceGrotesk">
                    Email Support
                  </p>
                  <div className="flex gap-2.5 items-start">
                    <img
                      src="/contact/icon/2.svg"
                      alt="email icon"
                      className="mt-1 size-4 md:size-5 shrink-0"
                    />
                    <a
                      href="mailto:info@proptyrx.com"
                      className="w-full text-sm md:text-base leading-6 md:leading-[27px] text-black/80 font-manrope hover:underline hover:text-black transition-colors break-all"
                    >
                      info@proptyrx.com
                    </a>
                  </div>
                </div>
              </BlurFade>

              {/* Address */}
              <BlurFade delay={0.3} inView>
                <div className="flex flex-col gap-2">
                  <p className="w-full text-base md:text-lg lg:text-xl leading-6 md:leading-7 font-medium text-black font-spaceGrotesk">
                    Address
                  </p>
                  <div className="flex gap-2.5 items-start">
                    <img
                      src="/contact/icon/1.svg"
                      alt="location icon"
                      className="mt-1 size-4 md:size-5 shrink-0"
                    />
                    <a
                      href="https://www.google.com/maps?ll=22.473934,88.36156&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=16193898662625639904"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-[90%] lg:w-[75%] text-sm md:text-base leading-6 md:leading-[27px] text-black/80 font-manrope hover:underline hover:text-black transition-colors"
                    >
                      Vishnu Enclave, Flat 5E 229 Netaji Subhash Chandra Bose
                      Road Kolkata – 700047, West Bengal, India
                    </a>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full lg:w-2/5 flex items-start lg:items-center">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 md:gap-5 w-full bg-white py-4 md:py-8 px-5 md:px-8 rounded-xs shadow-md"
            >
              <h2 className="text-lg md:text-xl font-semibold text-black font-spaceGrotesk mb-1">
                Send us a message
              </h2>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black font-spaceGrotesk text-sm md:text-base">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Name"
                        {...field}
                        className="h-10 md:h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black font-spaceGrotesk text-sm md:text-base">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Email Address"
                        {...field}
                        className="h-10 md:h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black font-spaceGrotesk text-sm md:text-base">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Phone Number"
                        {...field}
                        className="h-10 md:h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black font-spaceGrotesk text-sm md:text-base">
                      How can we help you?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-[100px] md:h-[120px] resize-none"
                        placeholder="Enter Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full flex justify-end pt-2">
                <Button
                  type="submit"
                  variant="black"
                  className="w-full sm:w-auto sm:min-w-[160px] h-10 md:h-11"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Sending" : "Submit"}
                  {form.formState.isSubmitting && (
                    <Loader className="ml-2 h-4 w-4 animate-spin" />
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
