import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ timestamps: false, paranoid: true, tableName: 'question' })
export class Question extends Model<Question> {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.BIGINT({ length: 20 }) })
  question_idx: number;

  @Column
  category_idx: number;

  @Column
  question_name: string;

  @Column
  question_type: number;
}
