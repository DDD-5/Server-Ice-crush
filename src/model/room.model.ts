import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ timestamps: false, paranoid: true, tableName: 'room' })
export class Room extends Model<Room> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.BIGINT({ length: 20 }) })
  room_idx: number;

  @Column
  category_idx: number;

  @Column
  room_code: string;

  @Column
  regist_datetime: Date;

  @Column
  update_datetime: Date;
}
