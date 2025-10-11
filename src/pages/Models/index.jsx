function foo(props) {
  console.log(props)
  return <div>foo</div>
}

export default function bar() {
  const value = {
      a: 1,
      b: 2,
    }
  return <foo {...value} />
}
