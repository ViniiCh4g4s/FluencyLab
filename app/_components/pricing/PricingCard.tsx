import FeatureList from "@/app/_components/pricing/FeatureList";
import Link from "next/link";

type Feature = {
  label: string;
  included: boolean;
  highlight?: boolean;
};

type Props = {
  plan: string;
  price: string;
  period: string;
  description: string;
  features: Feature[];
  ctaLabel: string;
  ctaVariant: "primary" | "outline";
  highlighted?: boolean;
};

export default function PricingCard({
  plan, price, period, description,
  features, ctaLabel, ctaVariant, highlighted,
}: Props) {
  return (
    <div
      className={`rounded-2xl border p-6 flex flex-col gap-4 ${
        highlighted
          ? "border-blue-500 shadow-md"
          : "border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">{plan}</span>
        {highlighted && (
          <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            ✦ Premium
          </span>
        )}
      </div>

      <div>
        <span className="text-4xl font-semibold text-gray-900">{price}</span>
        <span className="text-gray-400 text-sm ml-1">/ {period}</span>
      </div>

      <p className="text-sm text-gray-500 border-b border-gray-100 pb-4">
        {description}
      </p>

      <FeatureList features={features} />

      <Link
        href={highlighted ? "/checkout" : "#"}
        className={`mt-auto text-center py-2.5 px-4 rounded-xl text-sm font-medium transition ${
          ctaVariant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-gray-200 text-gray-700 hover:bg-gray-50"
        }`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}