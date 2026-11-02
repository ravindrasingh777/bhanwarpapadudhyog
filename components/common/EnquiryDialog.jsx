
"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { submitEnquiry } from "../../helper/submitEnquiry";

export default function EnquiryDialog({
  trigger,
  title = "Send Us an Enquiry",
  description = "Share your details and our team will contact you shortly.",
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const result = await submitEnquiry(formData);

      setMessage(result.msg);

      if (result.flag === 1) {
        setSuccess(true);
        setFormData({ name: "", phone: "" });
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (value) => {
    setOpen(value);

    if (!value) {
      setMessage("");
      setSuccess(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline">
            Send Enquiry
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-[#6E0F18]">
            {title}
          </DialogTitle>

          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
              ✓
            </div>

            <h3 className="text-lg font-semibold">
              Enquiry Submitted!
            </h3>

            <p className="mt-2 text-sm text-stone-600">
              {message}
            </p>

            <Button
              onClick={() => setOpen(false)}
              className="mt-5 bg-[#6E0F18] hover:bg-[#560B13]"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 pt-3">
            <div className="space-y-2">
              <Label htmlFor="enquiry-name">Full Name *</Label>

              <Input
                id="enquiry-name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="enquiry-phone">Mobile Number *</Label>

              <Input
                id="enquiry-phone"
                name="phone"
                type="tel"
                placeholder="Enter your mobile number"
                value={formData.phone}
                onChange={handleChange}
                required
                maxLength={15}
                pattern="[0-9+\-\s]{10,15}"
              />
            </div>

            {message && (
              <p className="text-sm text-red-600">
                {message}
              </p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#6E0F18] hover:bg-[#560B13]"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Enquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
