json.id      @checktime.id
json.plan    @checktime.plan
json.date    @checktime.created_at.strftime("%Y/%m/%d %H:%M")
json.month   @checktime.month
json.day     @checktime.day
json.hour    @checktime.hour
json.minute  @checktime.minute
json.memo    @checktime.memo