export function EnvList() {
  return (
    <ul className="space-y-2">
      <Item name="NODE_ENV" value={process.env.NODE_ENV} />
      <Item
        name="NEXT_PUBLIC_SERVER_ONLY_DEMO"
        value={process.env.NEXT_PUBLIC_SERVER_ONLY_DEMO}
      />
      <Item name="SERVER_ONLY_DEMO" value={process.env.SERVER_ONLY_DEMO} />
    </ul>
  );
}

function Item({ name, value }: { name: string; value: string | undefined }) {
  return (
    <li>
      <div className="flex flex-col">
        <span className="text-sm text-gray-400">{name}</span>
        <span className="text-right">{value}</span>
      </div>
    </li>
  );
}
