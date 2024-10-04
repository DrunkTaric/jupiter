import { Link } from "react-router-dom"

type ButtonType = {
  to?: string
  label: string
  type: "link" | "outline" | "default" | "secondary"
}

export default function Button(props: ButtonType) {

  if (props.type == "link") {
    return (
      <Link to={props.to ?? "/"}>
        {props.label}
      </Link>
    )
  }

  return (
    <button>
      {props.label}
    </button>
  )
}
