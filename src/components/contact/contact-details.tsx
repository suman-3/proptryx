import { Link, Mail, Phone, Loader } from "lucide-react";
import { Link as Redirect } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSubmit } from "@formspree/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  email: z.string().email({
    message: "email is required",
  }),
});

export const ContactDetails = () => {
  const submitToFormspree = useSubmit("xdkwledw");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await submitToFormspree(values);

      form.reset();
      toast.success("Newsletter Subscribed");
    } catch (error) {
      // Handle submission errors
      toast.error("Failed to subscribe. Please try again.");
      console.error("Form submission error:", error);
    }
  }

  return (
    <div className="w-full h-full px-5 md:px-20 py-14 md:py-16 2xl:px-64">
      <div className="w-full flex flex-col md:flex-row gap-10 items-start justify-between">
        <div className="flex flex-col space-y-2 font-medium w-full md:w-1/3">
          <h1 className="flex items-center text-lg gap-3">
            <Phone className="size-5" />
            <Redirect to="tel:+919477336606">+91 94773 36606</Redirect>
          </h1>
          <h1 className="flex items-center text-lg gap-3">
            <Mail className="size-5" />
            <Redirect to="mailto:info@grnlyft.com">info@grnlyft.com</Redirect>
          </h1>
          <h1 className="flex items-center text-lg gap-3">
            <Link className="size-5" />
            <Redirect to="https://grnlyft.com/">www.grnlyft.com</Redirect>
          </h1>
        </div>
        <div className="flex flex-col space-y-2 md:space-y-3 w-full md:w-1/3 ">
          <h1 className="text-lg font-medium">Kolkata Corporate Office:</h1>
          <p className="text-[16px] text-gray">
            1 Meher Ali Road <br /> Park Circus, Kolkata-700107 <br /> West
            Bengal, India
          </p>
        </div>
        <div className="flex flex-col space-y-2 md:space-y-3 w-full md:w-1/3">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Enter Email Address"
                        className="!w-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="mt-3 w-full !rounded-none"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Subscribing" : "Subscribe Now"}
                {form.formState.isSubmitting && (
                  <Loader className="ml-2 h-4 w-4 animate-spin" />
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
