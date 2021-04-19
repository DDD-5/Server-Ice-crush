import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ timestamps: false, paranoid: true, tableName: 'category' })
export class Category extends Model<Category> {
  @PrimaryKey
  @AutoIncrement
  @Column
  category_idx: number;

  @Column
  category_name: string;
}
