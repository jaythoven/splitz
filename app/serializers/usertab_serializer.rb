class UsertabSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :tab_id
  # has_one :user
  # has_one :tab
end
