interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return <div className="md:w-9/12 m-auto">{children}</div>;
}
