import React, { useEffect, useState } from 'react'
import { StyleSheet, Image } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import habitsData from "../../../Database/HabitsData"

function SelectHabit({ habit, habitInput }) {
  const [selected, setSelected] = useState(
    habit?.habitName ? habit?.habitName : "-"
  )

  const [data, setData] = useState()

  useEffect(() => {
    if (habit?.habitArea === "Mente") {
      setData(habitsData.dataMind)
    }
    if (habit?.habitArea === "Financeiro") {
      setData(habitsData.dataMoney)
    }
    if (habit?.habitArea === "Corpo") {
      setData(habitsData.dataBody)
    }
    if (habit?.habitArea === "Humor") {
      setData(habitsData.dataFun)
    }
    habitInput(habit?.habitName ? habit?.habitName : undefined)
  }, [])

  return (
    <>
      <SelectList
        setSelected={setSelected}
        data={data}
        search={false}
        onSelect={() => {
          habitInput(selected)
        }}
        placeholder={selected}
        boxStyles={styles.boxStyle}
        inputStyles={styles.inputStyle}
        dropdownStyles={styles.dropdownStyle}
        dropdownItemStyles={styles.dropdownItemStyle}
        dropdownTextStyles={styles.dropdownTextStyle}
        arrowicon={
          <Image
            source={require("../../../assets/icons/arrowDropdown.png")}
            style={styles.arrow}
          />
        }
      />
    </>
  )
}

export default SelectHabit

const styles = StyleSheet.create({
  boxStyle: {
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  inputStyle: {
    color: "white",
  },
  dropdownStyle: {
    borderWidth: 0,
  },
  dropdownItemStyle: {
    borderWidth: 1,
    borderColor: "#BBBB",
    borderRadius: 10,
    marginBottom: 15,
  },
  dropdownTextStyle: {
    color: "#BBBBBB",
  },
  arrow: {
    width: 20,
    height: 20,
  },
});