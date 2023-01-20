interface Props {
  children: React.ReactNode;
  [propName: string]: any;
}

export default function Button({ children, ...props }: Props) {
  return (
    <button
      className="rounded-lg border py-1 px-6 bg-blue-400 text-white active:bg-blue-600"
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
