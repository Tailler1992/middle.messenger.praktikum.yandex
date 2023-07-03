import Handlebars from "handlebars";
import {Block} from "../../core/Block";
import {logout} from "../../services/Auth";
import {withRouter} from "../../core/routing/withRouter";

interface LinkBaseProps {
  label: string;
  className?: string;
  href: string;
  events: {
    click: () => void;
  };
}

class LinkBase extends Block {
  constructor(props: LinkBaseProps) {
    super({
      ...props,
      events: {
        click: () => {
          if (this.props.href) {
            this.props.router.go(this.props.href);
          } else {
            logout().then();
          }
        },
      },
    });
  }

  render() {
    const template = `<a class="{{ className }}">{{{ label }}}</a>`;

    return this.compile(Handlebars.compile(template), this.props);
  }
}

export const Link = withRouter(LinkBase);
