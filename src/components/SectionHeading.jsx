export default function SectionHeading({ index, label, title }) {
  return (
    <div className="mb-12 sm:mb-16">
      <p className="label mb-3">
        ( {index} ) {label}
      </p>
      <h2 className="display text-4xl text-white sm:text-5xl">{title}</h2>
    </div>
  );
}
