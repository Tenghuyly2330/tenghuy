import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ContactForm = () => {

    const { t } = useTranslation();

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [errors, setErrors] = useState<any>({});

    const validate = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newErrors: any = {};

        if (!form.name.trim()) {
            newErrors.name = t("ContactNav.name_error");
        }

        if (!form.email.trim()) {
            newErrors.email = t("ContactNav.email_error");
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = t("ContactNav.email_error_text");
        }

        if (!form.subject) {
            newErrors.subject = t("ContactNav.subject_error");
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            toast.error(t("ContactNav.form"));
            return;
        }

        toast.success(t("ContactNav.success_message"));
        console.log(form);

        setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        setErrors({});
    };


    return (
        <div className="dark:bg-[#2a2a2f] w-ful p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-none">
            <h2 className="text-black dark:text-white text-[20px] lg:text-[25px] font-semibold mb-6">
                {t("ContactNav.message_title")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                    <label className="block text-sm font-bold text-black dark:text-gray-200 mb-2">
                        {t("ContactNav.name")}
                    </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-none dark:bg-black text-black dark:text-white outline-none focus:ring-2 focus:ring-rose-400"
                    />
                    {errors.name && (
                        <p className="text-red-400 text-sm mt-1">
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-bold text-black dark:text-gray-200 mb-2">
                        {t("ContactNav.email")}
                    </label>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-none dark:bg-black text-black dark:text-white outline-none focus:ring-2 focus:ring-rose-400"
                    />
                    {errors.email && (
                        <p className="text-red-400 text-sm mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Subject */}
                <div className="mb-4">
                    <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2"
                    >
                        {t("ContactNav.subject")}
                    </label>
                    <div className="relative">
                        <select
                            id="subject"
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            className="appearance-none w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white py-3 px-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-all"
                        >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="project">Project Collaboration</option>
                            <option value="job">Job Opportunity</option>
                            <option value="technical">Technical Question</option>
                            <option value="other">Other</option>
                        </select>
                        {/* Dropdown arrow */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                    {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm font-bold text-black dark:text-gray-200 mb-2">
                        {t('ContactNav.message')}
                    </label>
                    <textarea
                        rows={4}
                        placeholder="Tell me what you need help with..."
                        value={form.message}
                        onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                        }
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-none dark:bg-black text-black dark:text-white outline-none focus:ring-2 focus:ring-rose-400 resize-none"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-4 cursor-pointer bg-[#fe7b7a] transition-all text-white font-semibold py-3 rounded-xl"
                >
                    <img src="/images/icons/send.svg" alt="star" width={20} height={20} /> <span> {t("ContactNav.send_message")}</span>
                </button>
            </form>
        </div>
    );
}

export default ContactForm