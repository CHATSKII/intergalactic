import React from 'react';
import AmS from '@semcore/icon/lib/TimeNight/xs';
import AmM from '@semcore/icon/lib/TimeNight/s';
import AmL from '@semcore/icon/lib/TimeNight/m';
import PmS from '@semcore/icon/lib/TimeDay/xs';
import PmM from '@semcore/icon/lib/TimeDay/s';
import PmL from '@semcore/icon/lib/TimeDay/m';
import { Component, sstyled, Root } from '@semcore/core';
import { Box, IBoxProps } from '@semcore/flex-box';
import keyboardFocusEnhance, {
  IKeyboardFocusProps,
} from '@semcore/utils/lib/enhances/keyboardFocusEnhance';

const MAP_SIZE_TO_ICON = {
  m: {
    AM: <AmS />,
    PM: <PmS />,
  },
  l: {
    AM: <AmM />,
    PM: <PmM />,
  },
  xl: {
    AM: <AmL />,
    PM: <PmL />,
  },
};

export interface ITimePickerFormatProps extends IBoxProps, IKeyboardFocusProps {}

class TimePickerFormat extends Component<ITimePickerFormatProps> {
  static enhance = [keyboardFocusEnhance()];
  render() {
    const SPickerFormat = Root;
    const { Children, meridiem, size, styles } = this.asProps;
    const SPickerFormatText = 'span';

    return sstyled(styles)(
      <SPickerFormat render={Box} tag="button">
        {Children.origin ? (
          <Children />
        ) : (
          <>
            <SPickerFormatText>{meridiem}</SPickerFormatText>
            {MAP_SIZE_TO_ICON[size as any][meridiem]}
          </>
        )}
      </SPickerFormat>,
    );
  }
}

export default TimePickerFormat;
