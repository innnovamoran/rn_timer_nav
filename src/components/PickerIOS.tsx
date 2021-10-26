import React, {FC} from 'react';
import {Picker, PickerIOS as PickerIOScore} from '@react-native-picker/picker';

type props = {
  data: {id: number; label: string}[];
  selected: number;
  onValueChange: (id: number) => void;
};
const PickerIOS: FC<props> = ({
  data = [{id: 0, label: 'sin datos'}],
  selected,
  onValueChange,
}): JSX.Element => (
  <PickerIOScore
    style={{width: '100%'}}
    selectedValue={selected}
    onValueChange={(item: any) => {
      onValueChange(item);
    }}>
    {data.map((item, index) => (
      <PickerIOScore.Item
        key={index.toString()}
        label={item.label}
        value={item.id}
      />
    ))}
  </PickerIOScore>
);

export default PickerIOS;
