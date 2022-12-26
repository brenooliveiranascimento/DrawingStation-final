import React from 'react';
import { useSelector } from 'react-redux';
import { globalState } from '../../../../interfaces/modules/globalStateInterface';
import Colors from './Colors';

export default function PlayerInf() {
  const {
    classroomController: { classroom },
    classroomsData: { classroomsData }
  } = useSelector((state: globalState) => state);

  const { name, multiExemple, colors, description } = classroom;

  return (
    <section>
      <article>
        <h1>
          {classroom.name}
        </h1>
        <span>
          {description}
        </span>
      </article>
      <Colors/>
    </section>
  );
}
