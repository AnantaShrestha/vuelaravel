<?php

namespace Modules\Usermanagement\Entities;

use Illuminate\Database\Eloquent\Model;
class Role extends Model
{
    protected $guarded = [];
    protected $table = 'roles';


    public function permissions()
    {
        return $this->belongsToMany(Permission::class,'role_permissions', 'role_id', 'permission_id');
    }
}
