type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

interface Foo {
    foo: string;
    bar: number;
    baz: boolean;
}

// { foo?: string; bar: number; baz?: boolean; }
type OptionalFoo = WithOptional<Foo, 'foo' | 'baz'>;

const createFoo = (base: OptionalFoo): Foo => {
    return { foo: 'foo', baz: true, ...base };
};

const optionalFoo: OptionalFoo = { foo: '???', bar: 2 };

const fullFoo = createFoo(optionalFoo); // { foo: '???', bar: 2, baz: true }
