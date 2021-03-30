import React, { HTMLAttributes } from 'react';
import createComponent, { Component, IFunctionProps, Merge, sstyled, Root } from '@semcore/core';
import Modal, { IModalProps, IModalContext } from '@semcore/modal';
import { Box, IBoxProps } from '@semcore/flex-box';
import { IIconProps } from '@semcore/icon';
import CloseM from '@semcore/icon/lib/Close/m';
import ArrowLeftS from '@semcore/icon/lib/ArrowLeft/s';
import { ITextProps, Text } from '@semcore/typography';
import fire from '@semcore/utils/lib/fire';
import logger from '@semcore/utils/lib/logger';

import style from './style/fullscreen-modal.shadow.css';

export interface IFullscreenModalProps extends IModalProps {
  /** This property is responsible for the visibility of the modal window */
  hidden?: boolean;
  /** Function that is invoked when hiding a component */
  onClose?: (
    trigger: 'onBackClick' | 'onCloseClick' | 'onEscape' | 'onOutsideClick',
    e?: React.MouseEvent | React.KeyboardEvent,
  ) => void;
}

class FullscreenModalRoot extends Component<IFullscreenModalProps> {
  static displayName = 'FullscreenModal';
  static style = style;

  bindHandlerClose = (trigger?: 'onBackClick' | 'onCloseClick') => (
    e?: React.MouseEvent | React.KeyboardEvent,
  ) => {
    fire(this, 'onClose', trigger, e);
  };

  getCloseProps() {
    return {
      onClick: this.bindHandlerClose('onCloseClick'),
    };
  }

  getBackProps() {
    return {
      onClick: this.bindHandlerClose('onBackClick'),
    };
  }

  render() {
    const SFullscreenModal = Root;
    const {
      styles,
      hidden,
      Children,
      onClose,
      visible: visibleProps,
      closable,
      duration,
      disablePortal,
    } = this.asProps;
    const SFullscreenOverlay = Modal.Overlay;

    logger.warn(
      hidden !== undefined,
      "The 'hidden' property is deprecated, use 'visible'",
      this.asProps['data-ui-name'] || FullscreenModalRoot.displayName,
    );

    const visible = visibleProps === undefined ? !hidden : visibleProps;

    return sstyled(styles)(
      <Modal
        closable={false}
        visible={visible}
        onClose={onClose}
        duration={duration}
        disablePortal={disablePortal}
      >
        <SFullscreenOverlay>
          <SFullscreenModal render={Modal.Window}>
            {closable && <FullscreenModal.Close />}
            <Children />
          </SFullscreenModal>
        </SFullscreenOverlay>
      </Modal>,
    );
  }
}

export interface IFullscreenModalHeaderProps extends IBoxProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

function Header(props: IFunctionProps<IFullscreenModalHeaderProps>) {
  const SHeader = Root;
  const SHeaderDivider = 'div';
  const { Children, styles, title, description } = props;
  return sstyled(styles)(
    <SHeader render={Box}>
      {title && <FullscreenModal.Title children={title} />}
      {description && (
        <>
          <SHeaderDivider />
          <FullscreenModal.Description children={description} />
        </>
      )}
      <Children />
    </SHeader>,
  );
}

function Body(props: IFunctionProps<IBoxProps>) {
  const SBody = Root;
  return sstyled(props.styles)(<SBody render={Box} />);
}

function Section(props: IFunctionProps<IBoxProps>) {
  const SSection = Root;
  return sstyled(props.styles)(<SSection render={Box} />);
}

function Footer(props: IFunctionProps<IBoxProps>) {
  const SFooter = Root;
  return sstyled(props.styles)(<SFooter render={Box} />);
}

function Close(props: IFunctionProps<IIconProps>) {
  const SClose = Root;
  return sstyled(props.styles)(<SClose render={CloseM} />);
}

function Title(props: IFunctionProps<ITextProps>) {
  const STitle = Root;
  return sstyled(props.styles)(<STitle render={Text} tag="h4" />);
}

function Description(props: IFunctionProps<ITextProps>) {
  const SDescription = Root;
  return sstyled(props.styles)(<SDescription render={Text} />);
}

function Back(props: IFunctionProps<IBoxProps>) {
  const SBack = Root;
  const SBackText = Text;
  const { Children, styles } = props;

  return sstyled(styles)(
    <SBack render={Box}>
      <ArrowLeftS />
      <SBackText>
        <Children />
      </SBackText>
    </SBack>,
  );
}

const FullscreenModal = createComponent<
  Merge<IFullscreenModalProps, HTMLAttributes<HTMLDivElement>>,
  {
    Header: Merge<IFullscreenModalHeaderProps, HTMLAttributes<HTMLDivElement>>;
    Footer: Merge<IBoxProps, HTMLAttributes<HTMLDivElement>>;
    Close: Merge<IIconProps, React.SVGAttributes<SVGElement>>;
    Back: Merge<IBoxProps, HTMLAttributes<HTMLDivElement>>;
    Body: Merge<IBoxProps, HTMLAttributes<HTMLDivElement>>;
    Section: Merge<IBoxProps, HTMLAttributes<HTMLDivElement>>;
    Title: Merge<ITextProps, HTMLAttributes<HTMLHeadingElement>>;
    Description: Merge<ITextProps, HTMLAttributes<HTMLSpanElement>>;
  },
  IModalContext
>(
  FullscreenModalRoot,
  {
    Header,
    Footer,
    Close,
    Back,
    Body,
    Section,
    Title,
    Description,
  },
  { parent: Modal },
);

export default FullscreenModal;
