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
  const submitToFormspree = useSubmit("mjkwdvoz");

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
      <div className="w-full flex flex-col md:flex-row min-h-svh md:min-h-lvh px-6 md:px-14 2xl:px-64 pt-32">
        <div className="w-full md:w-3/5 mt-4">
          <div className="w-full flex flex-col items-start h-full space-y-4">
            <BlurFade delay={0.2} inView>
              <h1 className="text-xl md:text-4xl lg:text-5xl font-medium w-full leading-9 md:leading-[70px] tracking-wide mb-2 text-black font-spaceGrotesk">
                Get in touch with us.
              </h1>
            </BlurFade>
            <BlurFade delay={0.25} inView>
              <p className="w-[80%] text-black text-md md:text-[1.1rem] leading-5 md:leading-[30px] font-manrope">
                We're here 24×7 to support you — whether it's assistance,
                product demos or platform queries.
              </p>
            </BlurFade>
            <div className="flex flex-col gap-6 pt-4">
              <BlurFade delay={0.3} inView>
                <div className="flex flex-col gap-2">
                  <p className="w-full text-sm md:text-xl leading-5 md:leading-[28px] font-medium text-black font-spaceGrotesk">
                    Phone Support
                  </p>
                  <div className="flex gap-2 items-start">
                    <img
                      src="/contact/icon/3.svg"
                      alt="location icon"
                      className="mt-1.5 size-4 shrink-0"
                    />
                    <a
                      href="tel:+917044454300"
                      className="w-full text-sm md:text-[1rem] leading-5 md:leading-[27px] text-black/80 font-manrope hover:underline cursor-pointer"
                    >
                      +91 70444 54300
                    </a>
                  </div>
                </div>
              </BlurFade>
              <BlurFade delay={0.3} inView>
                <div className="flex flex-col gap-2">
                  <p className="w-full text-sm md:text-xl leading-5 md:leading-[28px] text-black font-spaceGrotesk">
                    Email Support
                  </p>
                  <div className="flex gap-2 items-start">
                    <img
                      src="/contact/icon/2.svg"
                      alt="location icon"
                      className="mt-1.5 size-4 shrink-0"
                    />
                    <a
                      href="mailto:info@proptyrx.com"
                      className="w-full md:w-[60%] text-sm md:text-[1rem] leading-5 md:leading-[27px] text-black/80 font-manrope hover:underline cursor-pointer"
                    >
                      info@proptyrx.com
                    </a>
                  </div>
                </div>
              </BlurFade>
              <BlurFade delay={0.3} inView>
                <div className="flex flex-col gap-2">
                  <p className="w-full md:w-[94%] text-sm md:text-xl leading-5 md:leading-[28px] font-medium text-black font-spaceGrotesk">
                    Address
                  </p>
                  <div className="flex gap-2 items-start">
                    <img
                      src="/contact/icon/1.svg"
                      alt="location icon"
                      className="mt-1.5 size-4 shrink-0"
                    />
                    <a
                      href="https://www.google.com/maps?ll=22.473934,88.36156&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=16193898662625639904"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-[60%] text-sm md:text-[1rem] leading-5 md:leading-[27px] font-medium text-black/80 font-manrope hover:underline cursor-pointer"
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
        <div className="w-full md:w-2/5 flex items-start">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 w-full bg-white py-4 px-6 rounded-sm shadow-sm"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-black font-spaceGrotesk text-sm md:text-[16px]">
                      Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Name" {...field} />
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
                    <FormLabel className="text-black font-spaceGrotesk text-sm md:text-[16px]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Email Address" {...field} />
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
                    <FormLabel className="text-black font-spaceGrotesk text-sm md:text-[16px]">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Phone Number" {...field} />
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
                    <FormLabel className="text-black font-spaceGrotesk text-sm md:text-[16px]">
                      How we can help you?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-[120px] resize-none"
                        placeholder="Enter Message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full flex justify-end">
                <Button
                  type="submit"
                  variant={"black"}
                  className="w-40"
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
