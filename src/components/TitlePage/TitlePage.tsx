interface TitlePageProps {
  title: string;
  subtitle: string;
}

export const TitlePage = ({ title, subtitle }: TitlePageProps) => {
  return (
    <>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-gray-500">{subtitle}</p>
    </>
  );
};
