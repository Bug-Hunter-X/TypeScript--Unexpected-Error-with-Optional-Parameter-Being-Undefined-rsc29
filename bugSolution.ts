function printName(name: string | null | undefined): void {
  const safeName = name ?? 'No name provided';
  console.log(safeName.toUpperCase());
}

printName(null);
printName(undefined);
printName('John Doe');