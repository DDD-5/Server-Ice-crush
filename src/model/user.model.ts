import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ timestamps: false, paranoid: true, tableName: 'user' })
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.BIGINT({ length: 20 }) })
  user_idx: number;

  @Column
  room_idx: number;

  @Column
  user_id: string;

  @Column
  user_name: string;

  @Column
  user_master: boolean;

  @Column
  regist_datetime: Date;

  @Column
  update_datetime: Date;
}
